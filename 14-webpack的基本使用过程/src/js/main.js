const {name,sum,mul} = require('./mathUtils')
console.log("11111111",name)
console.log("222222222",sum(10,20))
console.log("33333333",mul(20,20))

// webpack中css文件的配置
// webpack中url loader
require('../css/style.css')

// webpack中less文件的配置
require('../css/special.less')
document.writeln('<h2>你好啊</h2>')

// webpack使用vue的配置过程
import Vue from 'vue'
// import App from '../vue/app.js'
import App from '../vue/App.vue'
new Vue({
  el:'#app',
  template: '<App/>',
  components: {
    App
  }
})


