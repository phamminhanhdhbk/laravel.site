
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
var Vue =require('vue');
Vue.use(require('vue-resource'))
Vue.component('pagination', require('laravel-vue-pagination'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));
// Vue.component('infor', require('./components/Informinhanh.vue'));

import infor from './components/Informinhanh.vue';


const app = new Vue({
    el: '#app',
    components : { infor }

});
