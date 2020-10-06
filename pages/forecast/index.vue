<template>
  <div class="canvas">
    <b-container fluid>
      <b-row>
        <b-col>
          <div id="map" class="mh-100"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  head() {
    return {
      script: [
        { src: "js/leaflet-velocity.js" },
        { src: "js/leaflet.timedimension.layer.wms.timeseries.js" },
      ],
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      var endDate = new Date();
      endDate.setUTCMinutes(30, 0, 0); // due to a UCSD's new setting
      console.log(moment(endDate).format());

      var map = L.map("map", {
        zoomControl: true,
        scrollWheelZoom: false,
        gestureHandling: true,
        zoom: 6,
        center: [24.7, -87.8],
        attributionControl: true, //should be true for goecoding
        timeDimension: true,
        timeDimensionOptions: {
          timeInterval:
            moment(endDate).subtract(1, "days").format() +
            "/" +
            moment(endDate).format(),
          period: "PT1H",
          currentTime: endDate,
        },
        timeDimensionControl: true,
        timeDimensionControlOptions: {
          autoPlay: true,
          playerOptions: {
            buffer: 10,
            transitionTime: 500,
            loop: true,
          },
        },
      }); // end of L.map

      // ================================================================
      // Basemap Layers
      // ================================================================
      let darkGray = L.esri.basemapLayer("DarkGray");
      let lightGray = L.esri.basemapLayer("Gray");
      let esriOcean = L.layerGroup([
        L.esri.basemapLayer("Oceans"),
        L.esri.basemapLayer("OceansLabels"),
      ]);
      let esriImageFirefly = L.layerGroup([
        L.esri.basemapLayer("ImageryFirefly"),
        L.esri.basemapLayer("ImageryLabels"),
      ]);
      // Google Maps API and GoogleMutant
      var googleRoads = L.gridLayer.googleMutant({
        type: "roadmap", // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
      });
      var googleHybrid = L.gridLayer
        .googleMutant({
          type: "hybrid",
        })
        .addTo(map);

      // ================================================================
      /* grouping basemap layers */
      // ================================================================
      const basemapLayers = {
        "Google Roards": googleRoads,
        "Google Hybrid": googleHybrid,
        "ESRI Ocean": esriOcean,
        "Imagery(Firefly)": esriImageFirefly,
        "Dark Gray": darkGray,
        "Light Gray": lightGray,
      };

      // ================================================================
      // Ancillary Data Layers - Top Corner Layers Group
      // ================================================================

      var proxy = "/ssh/proxy.php";

      var sshWMSURL =
        "https://wms.hycom.org/thredds/wms/GOMu0.04/expt_90.1m000/FMRC/GOMu0.04_901m000_FMRC_best.ncd";
      var sshLayer = L.tileLayer.wms(sshWMSURL, {
        layers: "surf_el",
        format: "image/png",
        transparent: true,
      });
      var hycomSSHTimeLayer = L.timeDimension.layer.wms
        .timeseries(sshLayer, {
          proxy: proxy,
        })
        .addTo(map);

      // var hf6kmWMS =
      //   "https://hfrnet-tds.ucsd.edu/thredds/wms/HFR/USEGC/6km/hourly/RTV/HFRADAR_US_East_and_Gulf_Coast_6km_Resolution_Hourly_RTV_best.ncd?service=WMS&version=1.3.0";
      // var hfradar6kmLayer = L.nonTiledLayer.wms(hf6kmWMS, {
      //   layers: "surface_sea_water_velocity",
      //   format: "image/png",
      //   transparent: true,
      //   styles: "linevec/rainbow",
      //   markerscale: 15,
      //   markerspacing: 6,
      //   numcolorbands: 10,
      //   abovemaxcolor: "extend",
      //   belowmincolor: "extend",
      //   colorscalerange: "0,1.5",
      //   attribution: "HF RADAR",
      // });
      // var tdhfradar6kmLayer = L.timeDimension.layer
      //   .wms(hfradar6kmLayer, {
      //     proxy: proxy,
      //     cache: 25,
      //     cacheBackward: 25,
      //     cacheForward: 25,
      //     updateTimeDimension: false,
      //   })
      //   .addTo(map);
      // var hfradarLegend = L.control({
      //   position: "bottomleft",
      // });
      // hfradarLegend.onAdd = function (map) {
      //   var src =
      //     hf6kmWMS +
      //     "?REQUEST=GetLegendGraphic&LAYER=surface_sea_water_velocity&PALETTE=rainbow&numcolorbands=10&colorscalerange=0,1.5";
      //   var div = L.DomUtil.create("div", "info legend");
      //   div.innerHTML += '<img src="' + src + '" alt="legend">';
      //   return div;
      // };
      // hfradarLegend.addTo(map);

      /* GCOOS Region */
      var gcoosRegion = L.esri.featureLayer({
        url:
          "https://services1.arcgis.com/qr14biwnHA6Vis6l/arcgis/rest/services/The_GCOOS_Region/FeatureServer/2",
        opacity: 0.5,
        style: function (feature) {
          return {
            color: "blue",
            weight: 2,
          };
        },
      });

      // GCOOS Region US Exclusive Economic Zone
      var gcoosRegionUS = L.esri.featureLayer({
        url:
          "https://services1.arcgis.com/qr14biwnHA6Vis6l/arcgis/rest/services/The_GCOOS_Region/FeatureServer/1",
      });

      // Currently Active Hurricane (no tropical storm)
      var activeHurricaneESRI = L.esri.dynamicMapLayer({
        url:
          "https://utility.arcgis.com/usrsvcs/servers/6c6699e853424b22a8618f00d8e0cf81/rest/services/LiveFeeds/Hurricane_Active/MapServer",
        f: "image/png",
        transparent: true,
        opacity: 0.7,
      });
      activeHurricaneESRI
        .bindPopup(function (error, featureCollection) {
          if (error || featureCollection.features.length === 0) {
            return false;
          } else {
            console.log(featureCollection);
            var ppt = featureCollection.features[2].properties;
            var popup =
              "Name: " +
              ppt.STORMNAME +
              "<br>" +
              "Storm Type: " +
              ppt.STORMTYPE +
              "<br>" +
              "Storm ID: " +
              ppt.STORMID +
              "<br>" +
              "Date: " +
              ppt.DTG +
              "<br>" +
              "Intensity: " +
              ppt.INTENSITY +
              " knots<br>" +
              ppt.INTENSITY * 1.151 +
              " mph/ " +
              ppt.INTENSITY * 1.852 +
              " kmh <br>" +
              "Latitude/Longitude: " +
              ppt.LAT +
              "/" +
              ppt.LON +
              "<br>";
            return popup;
          }
        })
        .addTo(map);

      // ================================================================
      /* grouping ancillayr data layers */
      // ================================================================
      const groupedOverlay = {
        "Hycom Sea Surface Height": hycomSSHTimeLayer,
        "Active Hurricane": activeHurricaneESRI,
        // "HF Radar 6km Resolution Hourly <br><img src='img/HFRADAR_Gulf_6km.png' alt='hfradar_legend'>": tdhfradar6kmLayer,
        "GCOOS Region US": gcoosRegionUS,
        "GCOOS Region Gulf": gcoosRegion,
      };
      var controlLayers = L.control
        .layers(basemapLayers, groupedOverlay, {
          position: "topright",
          collapsed: true,
        })
        .addTo(map);
      // Full screen control
      map.addControl(new L.Control.Fullscreen());

      // Hycom Ocean Current
      function addHycom() {
        d3.json(
          "https://geo.gcoos.org/data/hycom/hycom_surface_current.json"
        ).then(function (data) {
          var velocityLayer = L.velocityLayer({
            displayValues: true,
            displayOptions: {
              velocityType: "water",
              displayPosition: "bottomleft",
              displayEmptyString: "No water data",
            },
            data: data,
            maxVelocity: 2.5,
            velocityScale: 0.1, // arbitrary default 0.005
          }).addTo(map);

          controlLayers.addOverlay(velocityLayer, "HYCOM Ocean Current");
        });
      }
      addHycom();

      // Set layers which redraw in a certain period
      setInterval(function () {
        controlLayers.removeLayer(velocityLayer);
        addHycom();
      }, 360000);
    }, // end of initMap
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
}

#map {
  min-width: 95vw;
  width: 100%;
  min-height: 90vh;
  height: 100%;
}
</style>