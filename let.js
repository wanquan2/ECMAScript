/*
    ** let声明变量只在代码块内有效
*/
let stateVar = [];
let stateLet = [];

for(var i = 0; i < 3; i++){
    stateVar[i] = function(){
        console.log(i);
    }
}
for(let m = 0; m < 3; m++){
    stateLet[m] = function(){
        console.log(m)
    }
}

stateVar[1]();// 3 
stateLet[1]();// 1

// 总结： 
//在var声明的循环中i是全局变量，函数能访问的i是全局变量，i在循环完之后是3，所以stateVar每次取值都是3；
//

var vars = 1;
console.log(vars + '---------------')
var vars = 3;
function f(){
    console.log(vars + '///////');
    var vars = 4;
}
f()
