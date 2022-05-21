// console.log("Hi this is ES6");

// var name = "keerthana";
// let age = 21;
// const avg = 90.0;
// console.log(name);
// console.log(age);
// console.log(avg);

// let a = 10;
// let b = 7;
// let c = 3;
// console.log(a, b);
// c = a + b;
// console.log(c);
// d = a * b;
// console.log(d);
// e = a - b;
// console.log(e);
// f = a / b;
// console.log(f);
// g = a % b;
// console.log(g);

// //program of java code into es6 to sum

// if (a > b) {
//   console.log("a is large");
// } else {
//   console.log("b is large");
// }

// if (a > b && a > c) {
//   console.log("a is large");
// } else if (b > a && b > c) {
//   console.log("b is large");
// } else {
//   console.log("c is large");
//}

// let english = 75;
// let maths = 40;
// let cs = 28;
// let total = english + maths + cs;
// let per = (total / 300) * 100;
// console.log(total, per);
// if (per < 30) {
//   console.log("FAIL");
// } else if (per >= 30 && per < 45) {
//   console.log("2nd DIV");
// } else if (per >= 45 && per < 60) {
//   console.log("3rd DIV");
// } else if (per > 60) {
//   console.log("FIRST");
// } else {
//   console.log("enter valid input");
// }

//switch
// var a = 10;
// switch (a) {
//   case 10:
//     console.log("child");
//     break;
//   case 20:
//     console.log("young person");
//     break;
//   default:
//     console.log("all expressions are false");
//     break;
// }

//es6
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// es5
// for (var j = 1; j < 10; j++) {
//   console.log(j);
// }

// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// function hello() {
//   return "function with return";
// }

// var d = hello();
// console.log(d);

// let a = 10;
// let b = 20;

// function sum() {
//   return a + b;
// }

// let c = sum();
// console.log(c);

// function add(n1, n2) {
//   var s = n1 + n2;
//   console.log(s);
// }
// //call your function
// add(200, 4);
// add("hello", "world");
// add(33.33, 66.5);

// function add(a, b = 1) {
//   return a + b;
// }

// console.log(add(4));
// console.log(add(4, 2));

// function sum(first, second = 10) {
//   console.log("first para is", first);
//   console.log("first para is", second);
//   return first + second;
// }
// console.log("example sum is :", sum(20));
// console.log("example sum is :", sum(20, 57));
// console.log("example sum is :", sum());
// console.log("example sum is :", sum(20, null));
// console.log("example sum is :", sum(20, undefined));

// function hello(...params) {
//   console.log(params.length);
// }
// hello();
// hello(20, 30);
// hello(4, 5, 6, 7, 8);
// hello("keerthana", "bandari");

// var f = function () {
//   return "hi this is anonymous function";
// };
// console.log(f);

// var data = function (a, b) {
//   return a + b;
// };

// function hello() {
//   var r;
//   r = data(10, 20);
//   console.log(r);
// }
// hello();

// var data1 = new Function("x", "y", "return x+y");
// var data2 = new Function("x", "y", "return x-y");
// var data3 = new Function("x", "y", "return x*y");
// var data4 = new Function("x", "y", "return x/y");
// var data5 = new Function("x", "y", "return x%y");

// function show() {
//   var result1 = data1(10, 3);
//   var result2 = data2(10, 3);
//   var result3 = data3(10, 3);
//   var result4 = data4(10, 3);
//   var result5 = data5(10, 3);
//   console.log(result1);
//   console.log(result2);
//   console.log(result3);
//   console.log(result4);
//   console.log(result5);
// }
// show();

// var simple = (x) => 10 + x;
// console.log(simple(10));

// var bandari = () => {
//   console.log("hi we are doing fat arrow function");
// };

// bandari();

// var keerthana = (x, y) => {
//   var z = x + y;
//   console.log(z);
// };

// keerthana(18, 54);

// hello_function();
// {
//   console.log("hi this is a function hosting");
// }
// hello_function();

// function hoist() {
//   a = 20;
//   var b = 100;
// }
// hoist();
// console.log(a);
// console.log(b);

// var main = function () {
//   var l = (function () {
//     var sum = 0;
//     for (var i = 1; i <= 20; i++) {
//       console.log(i);
//       sum += i;
//     }
//     console.log(sum);
//   })();
// };

// main();

// function abhi(number) {
//   console.log(number);

//   const newnum = number + 1;
//   var sum = 0;

//   if (newnum <= 10) {
//     abhi(newnum);
//   }
//   return sum + abhi(number - 1);
// }

// let result = console.log(abhi(1));

// function recursion(n) {
//   if (n <= 1) return n;
//   return n + recursion(n - 1);
// }

// let r = recursion(10);
// console.log(r);

// function factorial(n) {
//   if (n == 0) return 1;
//   return n * factorial(n - 1);
// }

// let r = factorial(5);
// console.log(r);

// class Student {
//   constructor() {
//     this.name = "keerthana";
//   }
//   getName() {
//     return this.name;
//   }
//   setName() {
//     this.name = "ms.keerthana";
//   }
// }
// let s = new Student();
// console.log(s.getName());
// s.setName();
// console.log(s.getName());

// class Test {
//   constructor(height, width) {
//     this.h = height;
//     this.w = width;
//   }
//   show() {
//     console.log("Height:", this.h);
//     console.log("Width:", this.w);
//   }
// }

// var p = new Test(10, 20);
// p.show();

// class Student {
//   constructor(id, name, mobile, city, email) {
//     this.i = id;
//     this.n = name;
//     this.m = mobile;
//     this.c = city;
//     this.e = email;
//   }
//   show() {
//     console.log("id :", this.i);
//     console.log("name :", this.n);
//     console.log("mobile :", this.m);
//     console.log("city :", this.c);
//     console.log("email :", this.e);
//   }
// }
// var obj = new Student(1, "keerthana", 123456789, "wgl", "abc@email.com");
// obj.show();

// const num = 100,
//   denominator = 10;
// try {
//   console.log(num / denominator);
//   console.log(a);
// } catch (error) {
//   console.log("an error caught in esc");
//   console.log("Message", error);
// } finally {
//   console.log("finally block will execute everytime");
// }

// const num = 60;
// try {
//   if (num > 50) {
//     console.log("success");
//   } else {
//     throw new Error("the number is low ");
//   }
//   console.log("hello from throw statement in ES6");
// } catch (error) {
//   console.log("error caught");
//   console.log("message:" + error);
// }

// function greet() {
//   console.log(1);
// }
// setTimeout(greet, 5000);

// let intervalid = setTimeout(greet + 1, 3000);
// console.log("Id" + intervalid);

// function myTime() {
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
//   setTimeout(myTime, 5000);
// }

// myTime();

// let c = 0;
// function showcount() {
//   c += 1;
//   console.log(c);
// }

// let id = setTimeout(showcount, 5000);
// clearTimeout(id);
// console.log("here time is stopped");

// function greet(name, callback) {
//   console.log("this is callback" + name);
//   callback();
// }

// function callme() {
//   console.log("i am back with callback function");
//   setTimeout(callme, 5000);
// }

// greet("bandari", callme);

// const count = true;
// let countvalue = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve("there is a countvalue in function");
//   } else {
//     reject("there is no count value in function");
//   }
// });
// console.log(countvalue);

// let countvalue = new Promise(function (resolve, reject) {
//   resolve("promise resolved....");
// });

// countvalue
//   .then(function succesvalue(result) {
//     console.log(result);
//   })
//   .then(function succesvalue1(result) {
//     console.log(
//       "you can execute one function more than one time in this way..."
//     );
//   });

// async function f() {
//   console.log("hi this is async function");
//   return Promise.resolve(1);
// }
// f();

// //async with then

// async function f1() {
//   console.log("hi this is async function");
//   return Promise.resolve(1);
// }
// f1().then(function (result) {
//   console.log(result);
// });

// const help = function () {
//   const promise = new Promise(function (resolve, reject) {
//     const x = "bandari";
//     const y = "bandari";
//     if (x == y) {
//       resolve("strings are same");
//     } else {
//       reject("strings are not same");
//     }
//   });
//   return promise;
// };

// async function demopromise() {
//   try {
//     let message = await help();
//     console.log("error" + error);
//   } catch (error) {
//     console.log("error" + error);
//   }
// }
// demopromise();
