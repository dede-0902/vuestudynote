// 小明
var moduleA = (function(){
  var obj = {}
  var name = '小明'
  var age = 22

  function sum(a,b){
    return a+b
  }

  var flag = true
  if(flag){console.log(sum(10,20))}

  obj.flag=flag
  obj.sum=sum
  return obj
})()

var name = '小明'
var age = 22

function sum(a,b){
  return a+b
}

var flag = true
if(flag){console.log(sum(10,20))}
module.exports={
  // flag:true,
  // sum(a,b){
  //   return a+b
  // }
  flag:flag,
  sum:sum
}