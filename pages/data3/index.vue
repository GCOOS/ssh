<template>
  <div class="canvas">
    <b-container>
      <h1 style="text-align: center">Sea Surface Height</h1>
<br />
      <b-row>
        <b-col>
          <p>
            The sea surface height (SSH) or height of the ocean surface is
            affected by tidal forces, ocean circulation and variations in the
            gravitational field. The daily variation from the mean sea surface
            height is the sea surface height anomaly (SSHa), which is observed
            by satellite altimeters. The observations from multiple altimetry
            satellites are merged into daily gridded data maps (historical data
            maps). Robert Leben (
            <a href="mailto:leben@colorado.edu">leben@colorado.edu</a>) from the
            Colorado Center for Astrodynamics Research (CCAR) produces these
            gridded data maps. For convenience purposes, the daily data fields
            were combined into yearly data files ranging from 2004 through
            present. Click on link for the corresponding year to download the
            data file or to view an animation of the data.
          </p>
          <p>
            For more information and to see which other years are available,
            visit the Colorado Center for Astrodynamics Research (CCAR) or
            contact Robert Leben (
            <a href="mailto:leben@colorado.edu">leben@colorado.edu</a>).
          </p>
        </b-col>
      </b-row>
      <br />
      <h2>Animation & NetCDF files</h2>
      <p>
        Note: all netcdf files are version4 and
        <a href="https://compliance.ioos.us/index.html" target="_blank"
          >IOOS-compliant</a
        >. Also recasted with signed variables. Questions:
        <a href="mailto:info@gcoos.org">info@gcoos.org</a>
      </p>
      <hr />
      <b-row>


        <b-col sm="6" md="4" lg="3">
          <video style="width: 100%" controls>
            <source
              src="https://geo.gcoos.org/data/ssh/gom/ssh_gom_2021_jan_jun.mp4"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
          </video>
          <p style="text-align: center">2021 January - June</p>
          <p style="text-align: center">
            <cms-plugin
              alt="Link/Button - Download NetCDF File "
              id="6300"
              render-plugin="true"
              title="Link/Button - Download NetCDF File"
            >
              <a
                class="btn btn-success btn-sm"
                href="https://geo.gcoos.org/data/ssh/gom/ssh_gom_2021_jan_jun.nc"
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
