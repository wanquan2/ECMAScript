/*
** Promise 异步编程解决方案，用同步的写法实现异步调用
*/

//列1
let _promise = new Promise(function(resolved,rejected){
    setTimeout(item => {
        if(true){
            return resolved('异步执行返回了');
        }else{
            return rejected(0);
        }
    },3000)
    
})

_promise.then(function(res){ //Promise实力化以后通过then方法可以分别指定成功（resolved）、失败（rejected）的回调方法
    console.log(`成功回调：${res}`);
    if(true){
        throw new Error('执行catch');
    }
    
},function(rej){
    console.log(`失败回调${rej}`)
}).catch(function(e){//then抛出错误了执行
    console.log('then抛出错误了执行:' + e.message)
})

// _promise.catch(function(e){//then抛出错误了执行
//     console.log('then抛出错误了执行:' + e.message)
// })


//例2
function _promiseFn(){
    return new Promise(function(resolved,rejected){
        ajax({
            method:'get',
            url:'./jsonData.json',
            async:false,
            success:function(res,header){
                resolved(res,header);
                console.log('我先')
            },
            fail:function(res,header){
                rejected(res,header)
            }
        })
    })
}

async function promiseAction(){
    try{
        const res = await _promiseFn();
        console.log(res)
    }catch{
        console.log('出错了的')
    }
}

promiseAction();



