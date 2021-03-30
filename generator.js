/*
** generator 是一种异步编程解决方案
 * generator 函数返回了一个遍历对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一个可以暂停的函数
 * yield 就是暂停标志
*/

function* setGenerator(){
    yield '你好'
    yield 'generator函数'
    return '最后'
}

// let generators = setGenerator();
// console.log(generators.next())//{ value: '你好', done: false } value表示状态值 done表示遍历是否结束
// console.log(generators.next())
// console.log(generators.next())
// console.log(generators.next())  

// for (const val of generators) {
//     console.log(val)  
// }
// { value: '你好', done: false }
// generator函数

function * demoright(){ //yield在表达式必须放在()中
    console.log('Hello' + (yield)); 
    console.log('Hello' + (yield 123)); 
}


// let demoss = demoright();
// demoss.next();
// demoss.next();

function* demo() {
    let input = yield;
}
// let demos = demo();
// demos.next();
// demos.next();



function* foo(x){
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (z + x + y)
}

let foos = foo(5);
console.log(foos.next())  //5
console.log(foos.next(12)) //8
console.log(foos.next(13)) //42  注意：next方法的参数 表示上一个yield表达式的值
