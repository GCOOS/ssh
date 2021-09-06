<template>
  <div class="menubar">
    <div class="oneline"></div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav-collapse">
        <b-navbar-brand href="/ssh/">
          <i class="fas fa-home">&nbsp;</i>
        </b-navbar-brand>
        <b-navbar-nav>
          <!-- <b-nav-item href="/ssh/timeseries">
            <i class="fas fa-caret-square-right"></i>&nbsp;Map Viewer
          </b-nav-item> -->
          <b-nav-item href="/ssh/data3/">
            <i class="fas fa-file-download"></i>&nbsp;Data (2021-)
          </b-nav-item>
          <b-nav-item href="/ssh/data2/">
            <i class="fas fa-file-download"></i>&nbsp;Data (2011-2020)
          </b-nav-item>
          <b-nav-item href="/ssh/data1/">
            <i class="fas fa-file-download"></i>&nbsp;Data (2004-2010)
          </b-nav-item>
          <b-nav-item href="/ssh/calculation/">
            <i class="fas fa-square-root-alt"></i>&nbsp;Process
          </b-nav-item>
          <!-- <b-nav-item href="/ssh/notebook/">
            <i class="fas fa-laptop-code"></i>&nbsp;Notebook Examples
          </b-nav-item> -->
        </b-navbar-nav>
      </b-collapse> </b-navbar
    >&nbsp;
  </div>
</template>

<style>
.menubar {
  font-family: "proxima-nova", Roboto, sans-serif;
  font-size: 18px;
  color: #222;
  display: inline-block;
  position: fixed;
  /*  margin-top: 106px; */
  top: 106px;
  margin: 0;
  padding: 0;
  height: auto;
  width: 100%;
  z-index: 1999;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.85);
}

.oneline {
  width: 100%;
  height: 2px;
  background-color: #da880e;
}
/* Navbar setting */
.menubar .navbar {
  padding: 1px 12px !important;
}
.bg-dark {
  background-color: #093f61 !important;
}

@media only screen and (max-width: 1200px) {
  .menubar {
    top: 96px;
    font-size: 16px;
  }
  .menubar .dropdown-toggle::after {
    position: relative;
    margin-left: 15px;
    border-right-width: 8px;
    border-left-width: 8px;
    border-top-width: 4px;
  }
}

@media only screen and (max-width: 420px) {
  .menubar {
    top: 75px;
  }
}
</style>
