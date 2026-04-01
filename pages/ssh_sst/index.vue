<template>
  <div class="canvas">
    <b-container>
      <h1 style="text-align: center">Combined Animations of SST and SSH Contours</h1>
<br />
      <b-row>
        <b-col>
		  <p>
		    The Sea Surface Height (SSH) or height of the ocean surface is affected by tidal forces, ocean circulation and variations in the
            gravitational field. The sea surface height above the Geoid is the Absolute Dynamic Topography (ADT), which is observed by satellite 
			altimeters. The SSH contours in the below visualizations are based on ADT data.
          </p>
          <p>
            The ADT data served here is <b>E.U. Copernicus Marine Service Information; https://doi.org/10.48670/moi-00148 and https://doi.org/10.48670/moi-00149.</b>
          </p>
		  <p>
            Description of the original Copernicus data product:
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
            Two different Sea Surface Temperature (SST) datasets are used for the below annual animations.
          </p>
		  <p>
            1) SST data from Louisiana State University (LSU) Earth Scan Laboratory (ESL): 
			"GOES-19 ABI Band 07 Composite Nighttime Sea Surface Temperature"
		  </p>
		  <p>
			2) SST data from NASA JPL MUR MEaSUREs Project:
			"GHRSST Level 4 MUR Global Foundation Sea Surface Temperature Analysis. Ver. 4.1. PO.DAAC, CA, USA. 
			Dataset accessed at http://doi.org/10.5067/GHGMR-4FJ04"
          </p>
        </b-col>
      </b-row>
      <br />
      <h2>Sea Surface Temperature and Sea Surface Height Contours on Gulf of America</h2>
      <p>
        The bold SSH contour line is the estimated Loop Current feature. 
		It is estimated as 0.1 m elevation above the median ADT of the deep ( > 200 m) Gulf.
      </p>
      <hr />
      <b-row>

        <b-col sm="6" md="4" lg="3">
          <video style="width: 100%" controls>
            <source
              src="https://gcoos5.geos.tamu.edu/WAF/GoA_SSH/SSH_LSU_SST/SSH_LSU_SST_2026.mp4"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
          </video>
          <p style="text-align: center">2026 LSU ESL SST plus SSH contours</p>
        </b-col>

        <b-col sm="6" md="4" lg="3">
          <video style="width: 100%" controls>
            <source
              src="https://gcoos5.geos.tamu.edu/WAF/GoA_SSH/SSH_JPL_MUR_SST/SSH_JPL_SST_2026.mp4"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
          </video>
          <p style="text-align: center">2026 NASA JPL MUR SST plus SSH contours</p>

        </b-col>

      </b-row>

    </b-container>
  </div>
</template>