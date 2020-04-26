import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import "./config/msgs"
import router from './config/router'
import store from './config/store'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwibmFtZSI6IldlbGxpbmd0b24iLCJlbWFpbCI6IndlbGxpbmd0b25jZ3MzMEBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTg3NzUxOTQzLCJleHAiOjE1ODgwMTExNDN9.gXCPr0_SR9cNUrUfoNSpInrpTxWaQ4n2A8DH4NxNTds'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')