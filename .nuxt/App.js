import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import '../assets/css/main.css'

import '../assets/css/menu.css'

import '../assets/css/grid-only.css'

import '../assets/css/footer.css'

import _6f6c098b from '../layouts/default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"Sea Surface Height","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"The sea surface height (SSH) or height of the ocean surface is affected by tidal forces, ocean circulation and variations in the gravitational field. The daily variation from the mean sea surface height is the sea surface height anomaly (SSHa), which is observed by satellite altimeters. The observations from multiple altimetry satellites are merged into daily gridded data maps (historical data maps)"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"favicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Lato:400,700"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdn.materialdesignicons.com\u002F1.3.41\u002Fcss\u002Fmaterialdesignicons.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Ficon?family=Material+Icons"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.6.1\u002Fcss\u002Fall.css","integrity":"sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP","crossorigin":"anonymous"},{"rel":"stylesheet","href":"https:\u002F\u002Funpkg.com\u002Fleaflet@1.3.4\u002Fdist\u002Fleaflet.css","integrity":"sha512-puBpdR0798OZvTTbP4A8Ix\u002Fl+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb\u002FSJAWZfWAkuyeQUytO7+7N4QKrDh+drA==","crossorigin":""},{"rel":"stylesheet","href":"https:\u002F\u002Fapi.mapbox.com\u002Fmapbox.js\u002Fplugins\u002Fleaflet-fullscreen\u002Fv1.0.1\u002Fleaflet.fullscreen.css"},{"rel":"stylesheet","href":"https:\u002F\u002Funpkg.com\u002Fleaflet.markercluster@1.4.0\u002Fdist\u002FMarkerCluster.Default.css"},{"rel":"stylesheet","href":"https:\u002F\u002Funpkg.com\u002Fleaflet.markercluster@1.4.0\u002Fdist\u002FMarkerCluster.css"}],"script":[{"src":"https:\u002F\u002Funpkg.com\u002Fleaflet@1.3.4\u002Fdist\u002Fleaflet.js","integrity":"sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA==","crossorigin":""},{"src":"https:\u002F\u002Funpkg.com\u002Fesri-leaflet@2.2.3\u002Fdist\u002Fesri-leaflet.js","integrity":"sha512-YZ6b5bXRVwipfqul5krehD9qlbJzc6KOGXYsDjU9HHXW2gK57xmWl2gU6nAegiErAqFXhygKIsWPKbjLPXVb2g==","crossorigin":""},{"src":"https:\u002F\u002Fapi.mapbox.com\u002Fmapbox.js\u002Fplugins\u002Fleaflet-fullscreen\u002Fv1.0.1\u002FLeaflet.fullscreen.min.js"},{"src":"\u002F\u002Fapi.tiles.mapbox.com\u002Fmapbox.js\u002Fplugins\u002Fleaflet-omnivore\u002Fv0.3.1\u002Fleaflet-omnivore.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fjquery\u002F3.1.1\u002Fjquery.min.js"}],"style":[]},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
