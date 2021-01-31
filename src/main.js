import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { BCarousel } from 'bootstrap-vue'
import { AvatarPlugin } from 'bootstrap-vue'
import { BAvatar } from 'bootstrap-vue'
import Vue from 'vue'
import Embed from 'v-video-embed'

Vue.component('b-avatar', BAvatar);
Vue.use(AvatarPlugin);
Vue.component('b-carousel', BCarousel);
Vue.use(Embed);


Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

/*
new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>',
        render: h => h(App)
    })
    */