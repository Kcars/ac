# AC

https://ac.pickoma.com

練習兼自用的鬧鐘WebApp。

## 練習項目

* Vue3
* Vuex
* Tailwindcss
* WebPack
* Netlify佈署

## 功能

在到達指定時間的時候，發出指定的音效。

### 指定時間種類

* 每日

example: `每天 10:00:00`

* 每週

example: `每週星期一 19:00:00`

* 倒數計時

example: `15秒後`

* 固定時間

example: `2021-01-10 14:30:00`

### 音效種類

* 預設（[鼓聲](http://www.kurage-kosho.info/others.html)）

* 指定網址 (雖然有CORS問題)

* 指定台詞（使用瀏覽器的SpeechSynthesisUtterance方法唸出）

## 使用情境

* 每小時提醒自己起來走動

* 每天晚上八點提醒自己要丟垃圾

* 每星期一下午一點提醒自己去檢查信箱

* 提醒自己五分鐘後要去關電源

## 注意事項

瀏覽器會限制自動播放的功能，通常是能在網址列的左方調整是否開放。

## 目前想到的未完成項目

* 想增加類似執行script的功能(時間到呼叫API取得檢查值，如果值符合則播放音效)

* 改寫成桌面應用程式？
