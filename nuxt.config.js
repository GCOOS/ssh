module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Sea Surface Height",
    meta: [{
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "The sea surface height (SSH) or height of the ocean surface is affected by tidal forces, ocean circulation and variations in the gravitational field. The daily variation from the mean sea surface height is the sea surface height anomaly (SSHa), which is observed by satellite altimeters. The observations from multiple altimetry satellites are merged into daily gridded data maps (historical data maps)",
      },
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/ssh/favicon.ico",
      },
      {
        /* Google Font */
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",
      },
      {
        /* Adobe Proxima Nova */
        rel: "stylesheet",
        href: "https://use.typekit.net/pel5bpx.css",
      },
      {
        /* Font Awesome */
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.11.2/css/all.css",
        integrity: "sha384-KA6wR/X5RY4zFAHpv/CnoG2UW1uogYfdnP67Uv7eULvTveboZJg0qUpmJZb5VqzN",
        crossorigin: "anonymous"
      }, {
        /* Leaflet */
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet@1.5.1/dist/leaflet.css",
        integrity: "sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==",
        crossorigin: ""
      }, {
        /* Leaflet Fullscreen Button */
        rel: "stylesheet",
        href: "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/leaflet.fullscreen.css"
      }, {
        /* Leaflet Marker Cluster Default */
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css"
      }, {
        /* Leaflet Awesome Marker */
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css"
      }, {
        /* Leaflet Gesture Control */
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.css"
      }, {
        /* Leaflet Time Dimesion */
        rel: "stylesheet",
        href: "https://cdn.rawgit.com/socib/Leaflet.TimeDimension/master/dist/leaflet.timedimension.control.min.css"
      }, {
        /* jQuery UI */
        rel: "stylesheet",
        href: "https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
      },
    ],
    script: [{
        /* Leaflet */
        src: "https://unpkg.com/leaflet@1.5.1/dist/leaflet.js",
        integrity: "sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og==",
        crossorigin: ""
      },
      {
        /* ESRI Leaflet */
        src: "https://unpkg.com/esri-leaflet@2.3.2/dist/esri-leaflet.js",
        integrity: "sha512-6LVib9wGnqVKIClCduEwsCub7iauLXpwrd5njR2J507m3A2a4HXJDLMiSZzjcksag3UluIfuW1KzuWVI5n/cuQ==",
        crossorigin: ""
      },
      {
        /* Leaflet Fullscreen */
        src: "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/Leaflet.fullscreen.min.js"
      },
      {
        /* Leaflet MarkerCluster */
        src: "https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"
      },
      {
        /* Leaflet Awesome Marker */
        src: "https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js"
      },
      {
        /* Leaflet Omnivore */
        src: "https://api.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js"
      },
      {
        /* Leaflet Gesture Control */
        src: "https://unpkg.com/leaflet-gesture-handling@1.1.8/dist/leaflet-gesture-handling.min.js"
      },
      {
        /* Google Maps API */
        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB1Qb_BhHlGWmRWf4PQrgTcG2xZai5ENP8&libraries=places"
      },
      {
        /* Leaflet GoogleMutant */
        src: "https://unpkg.com/leaflet.gridlayer.googlemutant@latest/Leaflet.GoogleMutant.js"
      },
      {
        /* for leaflet time-dimension */
        src: "https://cdn.jsdelivr.net/npm/iso8601-js-period@0.2.1/iso8601.min.js"
      },
      {
        /* Leaflet non-tiled layer */
        src: "https://cdn.jsdelivr.net/npm/leaflet.nontiledlayer@1.0.8/dist/NonTiledLayer.js"
      },
      {
        /* Leaflet Time Dimension */
        src: "https://cdn.jsdelivr.net/npm/leaflet-timedimension@1.1.1/dist/leaflet.timedimension.min.js"
      },
      {
        /* geotiff for Leaflet nonTiledLayer.wcs */
        src: "https://cdn.jsdelivr.net/npm/geotiff"
      },
      {
        /* jQuery for ajax */
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
      },
      {
        /* moment timezone */
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.23/moment-timezone-with-data.min.js",
      },
      {
        /* d3 */
        src: "https://d3js.org/d3.v5.min.js",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#00a2cc",
  },

  /*
   ** Global CSS
   */
  css: [{
      src: "~assets/css/webflow.css",
    },
    {
      src: "~assets/css/main.css",
    },
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: "~plugins/ga.js",
    ssr: false,
  }, ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // cache with options
    [
      "@nuxtjs/component-cache",
      {
        max: 10000,
        maxAge: 1000 * 60 * 60,
      },
    ],
    "bootstrap-vue/nuxt",
    "@nuxt/content",
  ],
  content: {
    // Options
  },
  /*
   ** Bootstrap-vue configuration
   */
  bootstrapVue: {
    bootstrapCSS: true, // or false for customized CSS
    bootstrapVueCSS: true,
  },
  router: {
    base: "/ssh/",
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader');
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'img-src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }
    },
    babel: {
      compact: true
    }
  },
};