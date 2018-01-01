// import React from 'react';
// import ReactDOM from 'react-dom';
//
// const array = [
//   {
//     name:'tom',
//     age:18
//   },
//   {
//     name:'jam',
//     age:19
//   },
// ]
//
// const persion = {
//   name:'tom',
//   arrowGetName:()=>this.name,
//   arrowThis:()=>this,
//   regularGetName:function(){
//     return this.name;
//   },
//   regularThis:function(){
//     return this;
//   }
// }
//
// // test
// console.log('persion.name:',persion.name);
// // console.log('persion.arrowGetName:',persion.arrowGetName());
// // console.log('persion.arrowThis:',persion.arrowThis());
// console.log('persion.regularGetName:',persion.regularGetName());
// console.log('persion.regularThis:',persion.regularThis());

// class Persion {
//   static version=13
//   static getVersion(){
//     return this.version;
//   }
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//     this.level = 0;
//   }
//   updateLevel(newLevel){
//     this.level = newLevel;
//   }
// }
// class Student extends Persion {
//   constructor(name,age){
//     super(name,age);
//   }
//   get levelT(){
//     return `${this.level}:from XiaoMing`
//   }
//   set levelUpdate(level){
//     this.level =level;
//   }
//   updateLevel(newLevel){
//     super.updateLevel(newLevel);
//   }
// }
//
// const tom = new Student('hello');
//
// console.log(tom.level); // 0
// console.log(tom.levelT); // 0:from XiaoMing
// tom.levelUpdate = 2;
// console.log(tom.levelT); // 2:from XiaoMing
// tom.updateLevel(3);
// console.log(tom.levelT);  // 3:from XiaoMing

// 增强的对象字面量定义

// const customProtoObj = {
//   toString:function(){
//     return "the customProtoObj To string"
//   }
// }
// const handler = ()=>'handler';
// const obj = {
//   // 直接指定重定义原型链
//   __proto__:customProtoObj,
//   // 属性赋值的简约写法
//   handler,
//   // 重定义 对象的toString 方法
//   toString(){
//     return `d:${super.toString()}`;
//   },
//   // 动态属性名称，这是最大的特性了
//   ["prop_"+(()=>42)()]:42,
// }
//
// console.log(obj.handler)
// console.log(obj.handler())
// console.log(obj.toString())
// console.log(obj.prop_42)

// const p = {name:'123',age:18};
// let {name,age,level=123} = p;
// console.log(level);

// function f(x, y, z) {
// 	return x + y + z;
// }
// let a = f.apply(undefined, [1, 2, 3, 4]);
// console.log(a);

// function test(){
//   for (var i = 0; i < 5; i++) {
//     (function(i){
//       setTimeout(function () {
//         console.log(i)
//       }, 1000*i);
//     })(i)
//
//   }
// }
//
// test();

// for(var i=1;i<10;i++){
// }
// console.log(i); //
// for(let j=1;j<10;j++){
// }
// console.log(j); //
//
// var typeSymbol = Symbol("type");
// class Pet {
//
//   constructor(type) {
//
//     this[typeSymbol] = type;
//
//   }
//   getType() {
//      return this[typeSymbol];
//   }
//
// }
//
// var a = new Pet("dog");
// console.log(a.getType());
// console.log(Object.getOwnPropertyNames(a))


// var obj = function ProfanityGenerator() {
//     return {
//        words: "Horrible words"
//     }
// }()
var obj = {
  words: 'tom'
}
// var handler = function CensoringHandler() {
//     return {
//       get: function (target, key) {
//           return target[key].replace("Horrible", "Nice");
//       },
//     }
// }();
var handler = {
  get: function (target, key) {
      return target[key].replace("tom", "cat");
  }
}
// console.log(obj);
// console.log(handler);

var proxy = new Proxy(obj, handler);

console.log(proxy.words);

// console.log(tom.name);
// console.log(tom.names);

// console.log(Persion.getVersion())


//
// ReactDOM.render(
//   'hello2',
//   document.getElementById('root')
// )
