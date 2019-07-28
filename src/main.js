import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import router from './router';

// import BookList from './components/BookList.vue';
// import ShowBook from './components/ShowBook.vue';
// import AddBook from './components/AddBook.vue';
// import EditBook from './components/EditBook.vue';

// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     {
//       path: '/',
//       name: 'BookList',
//       component: BookList
//     },
//     {
//       path: '/show-book/:id',
//       name: 'ShowBook',
//       component: ShowBook
//     },
//     {
//       path: '/add-book',
//       name: 'AddBook',
//       component: AddBook
//     },
//     {
//       path: '/edit-book/:id',
//       name: 'EditBook',
//       component: EditBook
//     }
//   ]
// });

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.use(VueApollo);

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
  // template: `
  //   <div>
  //     <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  //       <div class="collapse navbar-collapse" id="navbarNav">
  //         <ul class="navbar-nav">
  //           <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
  //           <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
  //           <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
  //         </ul>
  //       </div>
  //     </nav>
  //     <router-view class="view"></router-view>
  //   </div>
  // `
}).$mount('#app')
