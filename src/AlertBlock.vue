<template>
  <div>
    <div
      v-if="setting"
      class="bg-gray-700 rounded-lg w-1/2 h-60 flex m-1 relative overflow-auto"
    >
      <div class="mx-2 my-auto flex">
        <button
          class="text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          @click="doSetting"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.9414 12.2525C18.9414 12.5671 18.9136 12.8631 18.8766 13.1592L20.8289 14.6859C21.0047 14.8247 21.051 15.0745 20.9399 15.278L19.0894 18.4794C19.0062 18.6274 18.8489 18.7107 18.6916 18.7107C18.6361 18.7107 18.5806 18.7015 18.525 18.683L16.2212 17.7577C15.74 18.1185 15.2219 18.4331 14.6575 18.6644L14.3059 21.1164C14.2782 21.3384 14.0839 21.505 13.8525 21.505H10.1515C9.92024 21.505 9.72593 21.3384 9.69818 21.1164L9.34658 18.6644C8.78218 18.4331 8.26404 18.1278 7.78291 17.7577L5.47905 18.683C5.43278 18.7015 5.37727 18.7107 5.32175 18.7107C5.15521 18.7107 4.99792 18.6274 4.91464 18.4794L3.06415 15.278C2.95312 15.0745 2.99938 14.8247 3.17518 14.6859L5.12745 13.1592C5.09044 12.8631 5.06268 12.5578 5.06268 12.2525C5.06268 11.9471 5.09044 11.6418 5.12745 11.3457L3.17518 9.81908C2.99938 9.68029 2.94387 9.43047 3.06415 9.22692L4.91464 6.02556C4.99792 5.87752 5.15521 5.79425 5.3125 5.79425C5.36802 5.79425 5.42353 5.8035 5.47905 5.82201L7.78291 6.74725C8.26404 6.38641 8.78218 6.07182 9.34658 5.84051L9.69818 3.3886C9.72593 3.16654 9.92024 3 10.1515 3H13.8525C14.0839 3 14.2782 3.16654 14.3059 3.3886L14.6575 5.84051C15.2219 6.07182 15.74 6.37715 16.2212 6.74725L18.525 5.82201C18.5713 5.8035 18.6268 5.79425 18.6823 5.79425C18.8489 5.79425 19.0062 5.87752 19.0894 6.02556L20.9399 9.22692C21.051 9.43047 21.0047 9.68029 20.8289 9.81908L18.8766 11.3457C18.9136 11.6418 18.9414 11.9379 18.9414 12.2525ZM17.0909 12.2525C17.0909 12.0582 17.0817 11.8639 17.0447 11.577L16.9151 10.5315L17.7386 9.88384L18.7286 9.09738L18.0809 7.97783L16.9059 8.44971L15.9251 8.84757L15.0831 8.19989C14.713 7.92232 14.3429 7.70951 13.9451 7.54297L12.9643 7.14511L12.6405 4.8505H11.3544L11.1693 6.09958L11.0213 7.14511L10.0405 7.54297C9.66117 7.70026 9.28182 7.92232 8.88397 8.2184L8.05124 8.84757L7.08899 8.45896L5.91392 7.98709L5.26625 9.10664L6.26552 9.88384L7.08899 10.5315L6.95945 11.577C6.93169 11.8546 6.91319 12.0674 6.91319 12.2525C6.91319 12.4375 6.93169 12.6503 6.95945 12.9372L7.08899 13.9827L6.26552 14.6304L5.26625 15.4076L5.91392 16.5271L7.08899 16.0552L8.06975 15.6574L8.91172 16.3051C9.28182 16.5826 9.65192 16.7954 10.0498 16.962L11.0305 17.3598L11.3544 19.6545H12.6497L12.8348 18.4054L12.9828 17.3598L13.9636 16.962C14.3429 16.8047 14.7223 16.5826 15.1201 16.2866L15.9529 15.6574L16.9151 16.046L18.0902 16.5179L18.7379 15.3983L17.7386 14.6211L16.9151 13.9734L17.0447 12.9279C17.0724 12.6503 17.0909 12.4468 17.0909 12.2525ZM12.002 8.55149C9.95722 8.55149 8.30103 10.2077 8.30103 12.2525C8.30103 14.2973 9.95722 15.9535 12.002 15.9535C14.0468 15.9535 15.703 14.2973 15.703 12.2525C15.703 10.2077 14.0468 8.55149 12.002 8.55149ZM10.1515 12.2525C10.1515 13.2703 10.9843 14.103 12.002 14.103C13.0198 14.103 13.8525 13.2703 13.8525 12.2525C13.8525 11.2347 13.0198 10.402 12.002 10.402C10.9843 10.402 10.1515 11.2347 10.1515 12.2525Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div class="w-full space-y-1 flex flex-col justify-center">
        <div class="ml-5 mt-2 w-1/2">
          <label for="vol">標題: </label>
          <input
            class="w-1/2"
            type="text"
            id="label"
            name="source"
            placeholder="text"
            v-model="_label"
          />
        </div>
        <div class="ml-5 w-3/4">
          <label for="at">類型: </label>
          <select name="at" id="at" @change="onChangeAT" v-model="_at">
            <option value="countdown">倒數計時</option>
            <option value="spectime">指定時間</option>
            <option value="everyweek">每週</option>
            <option value="everyday">每日</option>
            <option value="cron">cron</option>
          </select>
        </div>
        <div v-if="_at !== 'cron'">
          <div class="ml-5 w-3/4" v-if="enable_month">
            <select
              name="month"
              id="month"
              @change="onChangeMonth"
              v-model="_select_month"
            >
              <option
                v-for="month in Array.from({ length: 12 }, (v, i) => i + 1)"
                :key="month"
                :value="month"
              >
                {{ month }}
              </option>
            </select>
            <label for="month">月</label>

            <select
              name="date"
              id="day"
              @change="onChangeDate"
              v-model="_select_date"
            >
              <option
                v-for="date in Array.from({ length: 31 }, (v, i) => i + 1)"
                :key="date"
                :value="date"
              >
                {{ date }}
              </option>
            </select>
            <label for="date">日</label>
          </div>
          <div class="ml-5 w-3/4" v-if="enable_day">
            <label for="day">星期</label>
            <select
              name="day"
              id="day"
              @change="onChangeDay"
              v-model="_select_day"
            >
              <option
                v-for="day in Array.from({ length: 7 }, (v, i) => i)"
                :key="day"
                :value="day"
              >
                {{ day }}
              </option>
            </select>
          </div>
          <div class="ml-5 w-3/4">
            <select
              name="hour"
              id="hour"
              @change="onChangeHour"
              v-model="_select_hour"
            >
              <option
                v-for="hour in Array.from({ length: 24 }, (v, i) => i)"
                :key="hour"
                :value="hour"
              >
                {{ hour }}
              </option>
            </select>
            <label for="hour">時</label>

            <select
              name="minute"
              id="minute"
              @change="onChangeMinute"
              v-model="_select_minute"
            >
              <option
                v-for="minute in Array.from({ length: 60 }, (v, i) => i)"
                :key="minute"
                :value="minute"
              >
                {{ minute }}
              </option>
            </select>
            <label for="minute">分</label>

            <select
              name="second"
              id="second"
              @change="onChangeSecond"
              v-model="_select_second"
            >
              <option
                v-for="second in Array.from({ length: 60 }, (v, i) => i)"
                :key="second"
                :value="second"
              >
                {{ second }}
              </option>
            </select>
            <label for="second">秒</label>
          </div>
        </div>
        <div class="ml-5 mt-2 w-1/2" v-if="_at == 'cron'">
          <label for="cron">crontext: </label>
          <input
            class="w-1/2"
            type="text"
            id="cron"
            name="cron"
            placeholder="* * * * * *"
            v-model="_crontext"
          />
        </div>
        <div v-if="enable_loop" class="ml-5 w-3/4">
          <label for="minute">是否重複</label>
          <select name="loop" id="loop" @change="onChangeLoop" v-model="_loop">
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
        </div>
        <div class="ml-5 w-1/2">
          <label for="vol">音量: </label>
          <select name="vol" id="vol" @change="onChangeVol" v-model="_vol">
            <option
              v-for="vol in Array.from({ length: 10 }, (v, i) =>
                (i * 0.1 + 0.1).toFixed(1)
              )"
              :key="vol"
              :value="vol"
            >
              {{ vol }}
            </option>
          </select>
        </div>
        <div class="ml-5 w-4/6">
          <label for="vol">音樂: </label>
          <input
            class="w-4/6"
            type="text"
            id="source"
            name="source"
            placeholder="empty=default or https://*.mp3 or speech text"
            v-model="_source"
          />
        </div>
      </div>
      <div class="mx-2 h-full flex absolute right-2">
        <button
          class="w-8 h-8 my-auto text-indigo-100 transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          @click="doRemove"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM16 9H8V19H16V9Z"
              fill="black"
            />
            <path d="M10 13H14V15H10V13Z" fill="black" />
          </svg>
        </button>
      </div>
    </div>
    <div
      v-if="!setting"
      class="bg-gray-700 rounded-lg w-1/2 h-16 flex m-1 relative overflow-auto"
    >
      <div class="mx-2 my-auto flex">
        <button
          class="text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          @click="doSetting"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.9414 12.2525C18.9414 12.5671 18.9136 12.8631 18.8766 13.1592L20.8289 14.6859C21.0047 14.8247 21.051 15.0745 20.9399 15.278L19.0894 18.4794C19.0062 18.6274 18.8489 18.7107 18.6916 18.7107C18.6361 18.7107 18.5806 18.7015 18.525 18.683L16.2212 17.7577C15.74 18.1185 15.2219 18.4331 14.6575 18.6644L14.3059 21.1164C14.2782 21.3384 14.0839 21.505 13.8525 21.505H10.1515C9.92024 21.505 9.72593 21.3384 9.69818 21.1164L9.34658 18.6644C8.78218 18.4331 8.26404 18.1278 7.78291 17.7577L5.47905 18.683C5.43278 18.7015 5.37727 18.7107 5.32175 18.7107C5.15521 18.7107 4.99792 18.6274 4.91464 18.4794L3.06415 15.278C2.95312 15.0745 2.99938 14.8247 3.17518 14.6859L5.12745 13.1592C5.09044 12.8631 5.06268 12.5578 5.06268 12.2525C5.06268 11.9471 5.09044 11.6418 5.12745 11.3457L3.17518 9.81908C2.99938 9.68029 2.94387 9.43047 3.06415 9.22692L4.91464 6.02556C4.99792 5.87752 5.15521 5.79425 5.3125 5.79425C5.36802 5.79425 5.42353 5.8035 5.47905 5.82201L7.78291 6.74725C8.26404 6.38641 8.78218 6.07182 9.34658 5.84051L9.69818 3.3886C9.72593 3.16654 9.92024 3 10.1515 3H13.8525C14.0839 3 14.2782 3.16654 14.3059 3.3886L14.6575 5.84051C15.2219 6.07182 15.74 6.37715 16.2212 6.74725L18.525 5.82201C18.5713 5.8035 18.6268 5.79425 18.6823 5.79425C18.8489 5.79425 19.0062 5.87752 19.0894 6.02556L20.9399 9.22692C21.051 9.43047 21.0047 9.68029 20.8289 9.81908L18.8766 11.3457C18.9136 11.6418 18.9414 11.9379 18.9414 12.2525ZM17.0909 12.2525C17.0909 12.0582 17.0817 11.8639 17.0447 11.577L16.9151 10.5315L17.7386 9.88384L18.7286 9.09738L18.0809 7.97783L16.9059 8.44971L15.9251 8.84757L15.0831 8.19989C14.713 7.92232 14.3429 7.70951 13.9451 7.54297L12.9643 7.14511L12.6405 4.8505H11.3544L11.1693 6.09958L11.0213 7.14511L10.0405 7.54297C9.66117 7.70026 9.28182 7.92232 8.88397 8.2184L8.05124 8.84757L7.08899 8.45896L5.91392 7.98709L5.26625 9.10664L6.26552 9.88384L7.08899 10.5315L6.95945 11.577C6.93169 11.8546 6.91319 12.0674 6.91319 12.2525C6.91319 12.4375 6.93169 12.6503 6.95945 12.9372L7.08899 13.9827L6.26552 14.6304L5.26625 15.4076L5.91392 16.5271L7.08899 16.0552L8.06975 15.6574L8.91172 16.3051C9.28182 16.5826 9.65192 16.7954 10.0498 16.962L11.0305 17.3598L11.3544 19.6545H12.6497L12.8348 18.4054L12.9828 17.3598L13.9636 16.962C14.3429 16.8047 14.7223 16.5826 15.1201 16.2866L15.9529 15.6574L16.9151 16.046L18.0902 16.5179L18.7379 15.3983L17.7386 14.6211L16.9151 13.9734L17.0447 12.9279C17.0724 12.6503 17.0909 12.4468 17.0909 12.2525ZM12.002 8.55149C9.95722 8.55149 8.30103 10.2077 8.30103 12.2525C8.30103 14.2973 9.95722 15.9535 12.002 15.9535C14.0468 15.9535 15.703 14.2973 15.703 12.2525C15.703 10.2077 14.0468 8.55149 12.002 8.55149ZM10.1515 12.2525C10.1515 13.2703 10.9843 14.103 12.002 14.103C13.0198 14.103 13.8525 13.2703 13.8525 12.2525C13.8525 11.2347 13.0198 10.402 12.002 10.402C10.9843 10.402 10.1515 11.2347 10.1515 12.2525Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div class="mx-2 my-auto flex" v-if="_at == 'countdown'">
        <button
          class="text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          @click="reset"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6 13.8C17.6 16.779 15.179 19.2 12.2 19.2C9.221 19.2 6.8 16.779 6.8 13.8C6.8 10.821 9.221 8.4 12.2 8.4V12L16.7 7.5L12.2 3V6.6C8.222 6.6 5 9.822 5 13.8C5 17.778 8.222 21 12.2 21C16.178 21 19.4 17.778 19.4 13.8H17.6Z"
              fill="black"
            />
          </svg>
        </button>
      </div>

      <div class="mx-2 my-auto flex">
        <button
          class="text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          @click="stop"
        >
          <svg
            v-if="is_stop"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.5714 12L6 20V4L18.5714 12Z" fill="black" />
          </svg>

          <svg
            v-if="!is_stop"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 4V20H10V4H6Z" fill="black" />
            <path d="M14 4V20H18V4H14Z" fill="black" />
          </svg>
        </button>
      </div>

      <div class="mx-2 my-auto flex">
        <button
          class="text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          @click="play(true)"
        >
          <svg
            enable-background="new 0 0 32 32"
            height="32"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 64 64"
            width="32"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M23.727,16.403v4.84v5.058v14.236c-1.268-0.777-2.754-1.233-4.35-1.233c-4.612,0-8.353,3.74-8.353,8.349  c0,4.614,3.74,8.354,8.353,8.354c4.61,0,8.349-3.739,8.35-8.352h0V25.151l21.25-6.109V33.33c-1.268-0.777-2.754-1.233-4.35-1.233  c-4.614,0-8.353,3.739-8.353,8.348c0,4.613,3.739,8.354,8.353,8.354c4.344,0,7.914-3.325,8.31-7.57h0.04V17.892v-3.586V7.993  L23.727,16.403z"
            />
          </svg>
        </button>
      </div>

      <div class="my-auto">
        <span class="text-3xl align-middle">{{ _label }}</span>
      </div>

      <div class="mx-2 flex absolute top-1/4 right-2">
        <button
          class="text-indigo-100 transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          @click="doRemove"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM16 9H8V19H16V9Z"
              fill="black"
            />
            <path d="M10 13H14V15H10V13Z" fill="black" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DEFAULT_SE from "./sounds/hand-drum01.mp3"; // http://www.kurage-kosho.info/others.html
import cron from "node-cron";

let task = null;

export default {
  data() {
    return {
      _at: "countdown",
      _month: 1,
      _date: 1,
      _day: 1,
      _hour: 1,
      _minute: 1,
      _second: 1,
      _crontext: "",
      _loop: false,
      _vol: 0.5,
      _source: "",
      _label: "",

      _select_month: -1,
      _select_date: -1,
      _select_day: -1,
      _select_hour: -1,
      _select_minute: -1,
      _select_second: -1,

      is_stop: false,
      setting: false,

      _value: 0,
      _dvalue: 0,

      enable_month: true,
      enable_date: true,
      enable_day: true,
      enable_hour: true,
      enable_minute: true,
      enable_second: true,
      enable_loop: true,
    };
  },
  methods: {
    getLabelFromAT(val) {
      let output = "";
      output = val == "countdown" ? "倒數" : output;
      output = val == "spectime" ? "指定時間" : output;
      output = val == "everyweek" ? "每週" : output;
      output = val == "everyday" ? "每日" : output;

      return output;
    },
    reset() {
      this._value = this._dvalue;
    },
    stop() {
      this.is_stop = !this.is_stop;
    },
    play(is_test = false) {
      if (!is_test && this.is_stop) {
        return;
      }

      if (this._source.indexOf("http") != -1 || this._source == "") {
        let sound;
        let _source = this.source;

        if (this.source == "") {
          _source = DEFAULT_SE;
        }

        try {
          sound = new Audio(_source);

          sound.volume = this._vol;
          sound.play();
        } catch (err) {
          console.error(`play sound failed:  , source: ${_source}`);
        }
      } else {
        let utterance = new SpeechSynthesisUtterance(this._source);
        speechSynthesis.speak(utterance);
      }
    },
    doSetting() {
      this.setting = !this.setting;
      this.parseValue();

      if (!this.setting) {
        this.$emit("update_tasks", {
          index: this.index,
          at: this._at,
          label: this._label,
          vol: this._vol,
          loop: this._loop,
          source: this._source,
          select_month: this._select_month,
          select_date: this._select_date,
          select_day: this._select_day,
          select_hour: this._select_hour,
          select_minute: this._select_minute,
          select_second: this._select_second,
          crontext: this._crontext,
        });
      }
    },
    doRemove() {
      this.$emit("remove", this.index);
    },
    parseValue() {
      if (this._at == "countdown") {
        let n_hour = this._select_hour >= 0 ? this._select_hour * 60 * 60 : 0;
        let n_minute = this._select_minute >= 0 ? this._select_minute * 60 : 0;
        let n_second = this._select_second >= 0 ? this._select_second : 0;
        let val = n_hour + n_minute + n_second;

        this._dvalue = this._value = val;
      } else {
        this._dvalue = this._value = -1;
      }

      if (this._at == "cron") {
        if (this._crontext.split(" ").length == 6) {

          if (task != null) {
            task.destroy();
          }

          task = cron.schedule(this.crontext, () => {
            this.play();
          });
        }
      }
    },
    onChangeAT(ev) {
      let val = ev.target.value;

      this.enable_month = this.enable_day = false;

      if (val == "countdown") {
        this.enable_loop = this._loop = true;
      }

      if (val == "spectime") {
        this.enable_month = true;
        this.enable_loop = this._loop = false;
      }

      if (val == "everyweek") {
        this.enable_day = true;
      }

      if (val == "everyday") {
      }
    },
    onChangeMonth(ev) {},
    onChangeDate(ev) {},
    onChangeDay(ev) {},
    onChangeHour(ev) {},
    onChangeLoop(ev) {},
    onChangeVol(ev) {},
  },
  mounted: function () {
    this._at = this.at;
    this._month = this.month;
    this._date = this.date;
    this._day = this.day;
    this._hour = this.hour;
    this._minute = this.minute;
    this._second = this.second;
    this._loop = this.loop;
    this._vol = this.vol;
    this._label = this.label;
    this._source = this.source;
    this._crontext = this.crontext;

    this._select_month = this.select_month;
    this._select_date = this.select_date;
    this._select_day = this.select_day;
    this._select_hour = this.select_hour;
    this._select_minute = this.select_minute;
    this._select_second = this.select_second;

    this.setting = this.is_setting;

    if (this._at == "countdown") {
      this.enable_month = this.enable_date = this.enable_day = false;
    } else {
      this.enable_month = this.enable_date = this.enable_day = true;
    }

    this.parseValue();
  },
  props: [
    "index",
    "month",
    "date",
    "day",
    "hour",
    "minute",
    "second",
    "at",
    "label",
    "vol",
    "source",
    "loop",
    "is_setting",
    "select_month",
    "select_date",
    "select_day",
    "select_hour",
    "select_minute",
    "select_second",
    "crontext",
  ],
  watch: {
    hour: function (news, olds) {},
    minute: function (news, olds) {},
    second: function (news, olds) {
      if (this._value > 0 && !this.is_stop && this._at == "countdown") {
        this._value -= 1;
      }

      if (this._at == "spectime") {
        if (
          this.month == this._select_month - 1 &&
          this.date == this._select_date &&
          this.hour == this._select_hour &&
          this.minute == this._select_minute &&
          this.second == this._select_second
        ) {
          this.play();
        }
      }

      if (this._at == "everyweek") {
        if (
          this.day == this._select_day &&
          this.hour == this._select_hour &&
          this.minute == this._select_minute &&
          this.second == this._select_second
        ) {
          this.play();
        }
      }

      if (this._at == "everyday") {
        if (
          this.hour == this._select_hour &&
          this.minute == this._select_minute &&
          this.second == this._select_second
        ) {
          this.play();
        }
      }
    },
    _value: function (news, olds) {
      if (news == 0) {
        this.play();

        if (this.loop) {
          this.reset();
        }
      }
    },
  },
};
</script>