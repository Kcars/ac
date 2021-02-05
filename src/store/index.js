import { createStore } from 'vuex'
import localforage from "localforage";

import cron from "node-cron";

import DEFAULT_SE from "../sounds/hand-drum01.mp3"; // http://www.kurage-kosho.info/others.html

const TABLE_NAME = "tasks_ac";

const store = createStore({
    state() {
        return {
            times: { hour: 0, minute: 0, second: 0 },
            tasks: [],
            crons: [],
            play_sound_log: []
        }
    },
    mutations: {
        updateTimes(state, payload) {
            state.times = payload;
        },
        addTask(state, payload) {
            state.tasks.push(payload);
        },
        updateTask(state, { index, setting }) {
            state.tasks[index] = setting;
        },
        deleteTask(state, { index }) {
            state.tasks.splice(index, 1);
        },
        addPlaySoundLog(state, payload) {
            state.play_sound_log.push(payload);
        },
        updateCron(state, { index, obj }) {
            state.crons[index] = obj;
        },
        updateLabel(state, { index, val }) {
            state.tasks[index].label = val;
        },
        updateAT(state, { index, val }) {
            state.tasks[index].at = val;
        },
        updateSelectDate(state, { index, val }) {
            state.tasks[index].select_date = val;
        },
        updateSelectDay(state, { index, val }) {
            state.tasks[index].select_day = val;
        },
        updateSelectTime(state, { index, val }) {
            state.tasks[index].select_time = val;
        },
        updateCDType(state, { index, val }) {
            state.tasks[index].cd_type = val;
        },
        updateVol(state, { index, val }) {
            state.tasks[index].vol = val;
        },
        updateDValue(state, { index, val }) {
            state.tasks[index].dvalue = val;
        },
        updateSource(state, { index, val }) {
            state.tasks[index].source = val;
        },
        updateLoop(state, { index, val }) {
            state.tasks[index].loop = val;
        },
        updateCronText(state, { index, val }) {
            state.tasks[index].crontext = val;
        },
        updateSetting(state, { index, val }) {
            state.tasks[index].is_setting = val;
        }
    },
    getters: {
        getTask: (state) => (index) => {
            return state.tasks[index];
        },
        getTaskSound: (state) => (index) => {
            return state.tasks[index].source;
        },
        getTaskSoundVol: (state) => (index) => {
            return state.tasks[index].vol;
        },
        getTaskCronSetting: (state) => (index) => {
            return state.tasks[index].crontext;
        },
        getCron: (state) => (index) => {
            return state.crons[index];
        }
    },
    actions: {
        async initTasks(context) {
            let tasks = await localforage.getItem(TABLE_NAME);

            tasks = JSON.parse(tasks);
            tasks = tasks == null ? [] : tasks;

            tasks.forEach((task, index) => {
                context.dispatch("addTask", { index, ...task });
            });
        },
        start(context) {
            context.dispatch('initTasks');

            setInterval(() => {
                let dd = new Date();
                let month = dd.getMonth();
                let date = dd.getDate();
                let day = dd.getDay();
                let hour = dd.getHours();
                let minute = dd.getMinutes();
                let second = dd.getSeconds();
                let zone = new Date().toString().match(/([-\+][0-9]+)\s/)[1];

                let obj_times = { month, date, day, hour, minute, second, zone };

                context.commit('updateTimes', obj_times);
            }, 1000);
        },
        storeTasks(context) {
            let obj = JSON.stringify(context.state.tasks);
            localforage.setItem(TABLE_NAME, obj, (err, res) => { });
        },
        addTask(context, payload) {
            if (payload == null) {
                payload = {
                    at: "countdown",
                    label: "",
                    vol: 5,
                    loop: "false",
                    source: "",
                    select_date: -1,
                    select_day: -1,
                    crontext: "",
                    is_setting: true,
                }
            }

            context.commit('addTask', payload);

            if (payload.at == 'cron') {
                context.dispatch('updateCron', { index: payload.index });
            } else {
                context.dispatch('deleteCron', { index: payload.index });
            }
        },
        updateTask(context, { index, setting }) {
            let payload = { index, setting };
            context.commit('updateTask', payload);

            // update storage
            context.dispatch('storeTasks');

            // update cron
            if (setting.at == 'cron') {
                context.dispatch('updateCron', { index: payload.index });
            } else {
                context.dispatch('deleteCron', { index: payload.index });
            }
        },
        deleteTask(context, { index }) {
            context.dispatch('deleteCron', { index });

            context.commit('deleteTask', { index });

            context.dispatch('storeTasks');
        },
        playSound(context, { index }) {
            let task = context.getters.getTask(index);
            let source = task.source;
            let vol = task.vol;
            let play_time = new Date().getTime();
            let payload = { index, source, play_time };

            if (source.indexOf("http") != -1 || source == "") {
                let sound;
                let _source = source;

                if (source == "") {
                    _source = DEFAULT_SE;
                }

                try {
                    sound = new Audio(_source);

                    sound.volume = vol / 10;
                    sound.play();
                } catch (err) {
                    console.error(`play sound failed. source: ${_source}`);
                }
            } else {
                let utterance = new SpeechSynthesisUtterance(source);
                speechSynthesis.speak(utterance);
            }

            console.log(`at: ${task.at} , source: ${task.source} , label: ${task.label}`);

            context.commit('addPlaySoundLog', payload);
        },
        updateCron(context, { index }) {
            let curr_cron = context.getters.getCron(index);
            let setting = context.getters.getTaskCronSetting(index);
            let sound = context.getters.getTaskSound(index);

            if (curr_cron != null) {
                context.dispatch('deleteCron', { index });
            }

            let obj = cron.schedule(setting, () => {
                console.log(`cron play: ${setting} , sound: ${sound}`);
                context.dispatch('playSound', { index });
            });

            context.commit('updateCron', { index, obj });

            console.log(`cron create: ${setting}`);
        },
        deleteCron(context, { index }) {
            let curr_cron = context.getters.getCron(index);
            if (curr_cron != null) {
                let setting = context.getters.getTaskCronSetting(index);
                curr_cron.destroy();
                console.log(`cron ${setting} destroy.`)
            }
        }
    }
})

export default store