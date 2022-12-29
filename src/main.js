import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";

Vue.config.productionTip = false;

// import style

import("@/Scss/main.scss");

// start Vee-validate plugin

import {
    ValidationObserver,
    ValidationProvider,
    extend,
    localize,
} from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import ar from "vee-validate/dist/locale/ar.json";
import * as rules from "vee-validate/dist/rules";

// Add a rule.
Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule]);
});

localize("ar", ar);
localize("en", en);

localize({
    en: {
        names: {
            price_after_tax: "Price after tax",
        },
    },
    ar: {
        names: {
            price_after_tax: "السعر يعد الضريبة",
        },
    },
});

// custom vee-validate methods validation

require("./vee-validate");

// Register it globally

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

// end Vee-validate plugin

// start bootstrap

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// end bootstrap

// =================== start font awesome ===================

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

/* add font awesome icon component */

Vue.component("font-awesome-icon", FontAwesomeIcon);

// ================ end font awesome =============================

// start carousel

// import carousel from "vue-owl-carousel";
// Vue.component("carousel", carousel);

// end carousel

// start animate.css

import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(AOS);

// end animate.css

// =================== start lazy image =========================

// =================== end lazy image ===========================

//=================  start import MultiSelect ======================

import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);

//  =================  end import MultiSelect ======================

// start translation

import i18n from "@/Plugins/i18n.js";

// end translation

// start axios installation

import axios from "@/Services/Settings.js";
Vue.use(axios);

// end axios installation

// start sweet alert vue

import VueSweetalert2 from "vue-sweetalert2";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

// start sweet alert vue

// start ckeditor

import CKEditor from "ckeditor4-vue";

Vue.use(CKEditor);

// end ckeditor

// start vue tel input
import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";

Vue.use(VueTelInput);
// end vue tel input

Vue.use(VueMeta);

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
    // start animate.css
    mounted() {
        AOS.init();
    },
    // start animate.css
}).$mount("#app");



