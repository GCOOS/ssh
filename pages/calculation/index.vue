<template>
  <div class="canvas">
    <b-breadcrumb :items="items" />
    <b-container>
      <h2>Calculation of sea surface height anomaly</h2>
      <hr />
      <b-row>
        <b-col>
          <p>
            The sea surface height anomaly (SSHa) for a specific day can be
            determined by using the formula provided by Robert Leben (
            <a href="mailto:leben@colorado.edu">leben@colorado.edu</a>). The
            formula calculates the SSHa relative to the AVISO mean sea surface
            CLS 11.
          </p>
          <p>
            <strong
              >SSHa = SSH + mean_alt_hist_cls11_1993_1999 -
              mean_model_93_99.</strong
            >
          </p>
          <p>The 3 terms needed&nbsp;are:</p>
          <ol>
            <li>
              the gridded sea surface height (SSH) for the day in question,
            </li>
            <li>
              the mean of the yearly mean sea surface height anomaly (SSHa) for
              the time period 1/1/1993 -12/31/1999
              (mean_alt_hist_cls11_1993_1999),
            </li>
            <li>
              the mean sea surface height for the time period 1/1/1993
              -12/31/1999, which was calculated with the University of Colorado
              Gulf of Mexico model (CUPOM).&nbsp;
            </li>
          </ol>
          <p>
            Both files (2, 3) are provided below in netcdf format. The files
            contain Longitude (280&deg; - 262&deg;, with 0.25&deg; spacing),
            Latitude (31&deg; &ndash; 18&deg; N with 0.25&deg; spacing), and sea
            surface height anomaly data in cm.
          </p>
          <p>
            <a
              href="https://geo.gcoos.org/data/ssh/gom/total_ssh/mean_alt_hist_cls11_1993_1999.nc"
              >mean_alt_hist_cls11_1993_1999.nc</a
            >
          </p>
          <p>
            <a
              href="https://geo.gcoos.org/data/ssh/gom/total_ssh/mean_model_93_99.nc"
              >mean_model_93_99.nc</a
            >
          </p>
          <p>&nbsp;</p>
          <p>For more information:</p>
          <p>
            Leben R.R, G.H. Born, B.R. Engelbrecht. 2002. Operational Altimeter
            Data Processing for Mesoscale Monitoring, Marine Geodesy, 25:3-18
          </p>
          <p>&nbsp;</p>
          <p>
            In order to better visualize the difference between SSH and SSHA, 5
            graphs have been created.
          </p>
          <p>
            Mean historical ssha data, Mean ssh model data, SSH, SSH + Mean
            historical ssh and SSHa.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6" sm="4" md="3" lg="2">
          <div class="card mb-3">
            <a
              href="https://geo.gcoos.org/data/ssh/gom/total_ssh/mean_alt_hist_cls11_1999_plot.png"
              target="_blank"
            >
              <img
                class="card-img-top"
                src="~assets/images/ssh/mean_alt_hist_cls11_1999_plot_fs2_250x222.jpg"
                alt="Card image"
              />
            </a>
            <div class="card-body">Mean historical ssha data</div>
          </div>
        </b-col>
        <b-col cols="6" sm="4" md="3" lg="2">
          <div class="card mb-3">
            <a
              href="https://geo.gcoos.org/data/ssh/gom/total_ssh/mean_model_93_99_plot.png"
              target="_blank"
            >
              <img
                class="card-img-top"
                src="~assets/images/ssh/mean_model_93_99_plot_fs2_250x222.jpg"
                alt="Card image"
              />
            </a>
            <div class="card-body">Mean ssh model data</div>
          </div>
        </b-col>
        <b-col cols="6" sm="4" md="3" lg="2" xl="2">
          <div class="card mb-3">
            <a
              href="https://geo.gcoos.org/data/ssh/gom/total_ssh/ssh_Jan_1_2007.png"
              target="_blank"
            >
              <img
                class="card-img-top"
                src="~assets/images/ssh/ssh_jan_1_2007_fs2_250x222.jpg"
                alt="Card image"
              />
            </a>
            <div class="card-body">SSH</div>
          </div>
        </b-col>
        <b-col cols="6" sm="4" md="3" lg="2" xl="2">
          <div class="card mb-3">
            <a
              href="https://geo.gcoos.org/data/ssh/gom/total_ssh/ssh___mean_alt_hist_cls11_1999_plot.png"
              target="_blank"
            >
              <img
                class="card-img-top"
                src="~assets/images/ssh/ssh__mean_alt_hist_cls11_1999_plot_fs2_250x222.jpg"
                alt="Card image"
              />
            </a>
            <div class="card-body">SSH + Mean historical ssh</div>
          </div>
        </b-col>
        <b-col cols="6" sm="4" md="3" lg="2" xl="2">
          <div class="card mb-3">
            <a
              href="https://geo.gcoos.org/data/ssh/gom/total_ssh/SSHa.png"
              target="_blank"
            >
              <img
                class="card-img-top"
                src="~assets/images/ssh/ssha_fs2_250x222.jpg"
                alt="Card image"
              />
            </a>
            <div class="card-body">SSHa</div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
