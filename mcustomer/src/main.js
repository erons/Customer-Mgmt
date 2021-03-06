// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'

//Middleware
Vue.use(vueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false

//Routes to all components
const  routes = [
    {path:'/', component: Customers},
    {path: '/about', component: About},
    {path: '/add', component: Add},
    {path: '/customer/:id', component: CustomerDetails},
    {path: '/edit/:id', component: Edit},
];

const router = new VueRouter ({
  mode: 'history',
  base: __dirname,
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
   <div id= "app">
   <nav class="navbar navbar-inverse ">
        <a class="navbar-brand" href="#">Customers</a>
   <div class="container">
     <div class="navbar-header">
     </div>
     <div id="navbar" class="collapse navbar-collapse">
       <ul class="nav navbar-nav">
         <li><router-link to="/">Home</router-link></li>
         <li><router-link to="/add">Add Customer</router-link></li>
       </ul>
       <ul class="nav navbar-nav navbar-right">
         <li><router-link to="/about">About</router-link></li>
       </ul>
     </div><!--/.nav-collapse -->
   </div>
 </nav>
      <router-view></router-view>
   </div>
   `
}).$mount(`#app`)
