import "./styles/main.css"

import { createApp } from 'vue';
import App from './App.vue'

const vm = createApp(App).mount('#app');

setInterval(() => {
    let dd = new Date();
    let month = dd.getMonth();
    let date = dd.getDate();
    let day = dd.getDay();
    let hour = dd.getHours();
    let minute = dd.getMinutes();
    let second = dd.getSeconds();
    let zone = new Date().toString().match(/([-\+][0-9]+)\s/)[1];

    let obj_times = { month,date,day,hour,minute,second,zone };

    vm.times = obj_times;
}, 1000);