// 小明
(function(){
  if(moduleA.flag){
    console.log("hahah")
  }
  console.log(moduleA.sum(10,20))
})()

var {flag,sum} = require('aaa.js')