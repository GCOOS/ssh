<template>
  <div class="canvas">
    <b-container>
      <h1 style="text-align: center">Sea Surface Height</h1>
<br />
      <b-row>
        <b-col>
          <p>
            The ADT data served here is <b>E.U. Copernicus Marine Service Information; https://doi.org/10.48670/moi-00148 and https://doi.org/10.48670/moi-00149.</b>
          </p>
          <p>
            The Sea Surface Height (SSH) or height of the ocean surface is
            affected by tidal forces, ocean circulation and variations in the
            gravitational field. The sea surface height above the Geoid is the
            Absolute Dynamic Topography (ADT), which is observed by satellite
            altimeters. For convenience purposes, this site redistributes the Copernicus
            ADT data as yearly data files, along with ADT contour animations generated
            by GCOOS.
          </p>
          <p>
            The description of the original Copernicus data product:
          </p>
          <p style="font-size: small">
            <i>Altimeter satellite gridded Sea Level Anomalies (SLA) computed with
            respect to a twenty-year [1993, 2012] mean. The SLA is estimated by
            Optimal Interpolation, merging the L3 along-track measurement from the
            different altimeter missions available. Part of the processing is fitted
            to the Global ocean. (see QUID document or http://duacs.cls.fr pages for
            processing details).
            The product gives additional variables (i.e. Absolute Dynamic Topography
            and geostrophic currents (absolute and anomalies)). It serves in delayed-time
            applications.
            This product is processed by the DUACS multimission altimeter data processing system.</i>
          </p>
          <p>
            For more information about the Gulf of America Sea Surface Height, contact Robert Leben (
            <a href="mailto:leben@colorado.edu">leben@colorado.edu</a>). For more information about the
            Copernicus data, visit <a href="http://marine.copernicus.eu">http://marine.copernicus.eu</a>.
          </p>
        </b-col>
      </b-row>
      <br />
      <h2>Animation & NetCDF files</h2>
      <p>
        Note: all netcdf files are version4 and
        <a href="https://compliance.ioos.us/index.html" target="_blank"
          >IOOS-compliant</a
        >. Questions:
        <a href="mailto:info@gcoos.org">info@gcoos.org</a>
      </p>
      <hr />
      <b-row>


        <b-col sm="6" md="4" lg="3">
          <video style="width: 100%" controls>
            <source
              src="https://gcoos5.geos.tamu.edu/WAF/GoA_SSH/ssh_goa_2021.mp4"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
          </video>
          <p style="text-align: center">2021</p>
          <p style="text-align: center">
            <cms-plugin
              alt="Link/Button - Download NetCDF File "
              id="6300"
              render-plugin="true"
              title="Link/Button - Download NetCDF File"
            >
              <a
                class="btn btn-success btn-sm"
                href="https://gcoos5.geos.tamu.edu/erddap/files/SSH_GoA_2021/2021.nc"
                role="button"
                >Download NetCDF File</a
              >
            </cms-plugin>
          </p>
        </b-col>

        <b-col sm="6" md="4" lg="3">
          <video style="width: 100%" controls>
            <source
              src="https://gcoos5.geos.tamu.edu/WAF/GoA_SSH/ssh_goa_2022.mp4"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
          </video>
          <p style="text-align: center">2022</p>
          <p style="text-align: center">
            <cms-plugin
              alt="Link/Button - Download NetCDF File "
              id="6300"
              render-plugin="true"
              title="Link/Button - Download NetCDF File"
            >
              <a
                class="btn btn-success btn-sm"
                href="https://gcoos5.geos.tamu.edu/erddap/files/SSH_GoA_2022/2022.nc"
                role="button"
                >Download NetCDF File</a
              >
            </cms-plugin>
          </p>
        </b-col>
        
        <b-col sm="6" md="4" lg="3">
          <video style="width: 100%" controls>
            <source
              src="https://gcoos5.geos.tamu.edu/WAF/GoA_SSH/ssh_goa_2023.mp4"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
          </video>
          <p style="text-align: center">2023</p>
          <p style="text-align: center">
            <cms-plugin
              alt="Link/Button - Download NetCDF File "
              id="6300"
              render-plugin="true"
              title="Link/Button - Download NetCDF File"
            >
              <a
                class="btn btn-success btn-sm"
                href="https://gcoos5.geos.tamu.edu/erddap/files/SSH_GoA_2023/2023.nc"
                role="button"
                >Download NetCDF File</a
              >
            </cms-plugin>
          </p>
        </b-col>

        <b-col sm="6" md="4" lg="3">
          <video style="width: 100%" controls>
            <source
              src="https://gcoos5.geos.tamu.edu/WAF/GoA_SSH/ssh_goa_2025.mp4"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
          </video>
          <p style="text-align: center">2025</p>
          <p style="text-align: center">
            <cms-plugin
              alt="Link/Button - Download NetCDF File "
              id="6300"
              render-plugin="true"
              title="Link/Button - Download NetCDF File"
            >
              <a
                class="btn btn-success btn-sm"
                href="https://gcoos5.geos.tamu.edu/erddap/files/SSH_GoA_2025/2025.nc"
                role="button"
                >Download NetCDF File</a
              >
            </cms-plugin>
          </p>
        </b-col>

      </b-row>

    </b-container>
  </div>
</template>
