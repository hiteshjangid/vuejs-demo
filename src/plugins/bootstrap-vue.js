import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/* add global scss file */
import "../styles/global-style.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
