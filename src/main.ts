import { createApp } from 'vue';
import App from './App.vue';
// import router from './router';
// import store from './store';

const app = createApp(App);

app.config.globalProperties.$log = function<T>(v: T) {
   console.log(v);
};
// .use(store)
// .use(router)
app.mount('#app');
