class ass {
    constructor(name){
        this.name = name
    }

    getName(){
        return this.name;
    }
}


class abb extends ass {
    constructor(name){
        super(name);
        this.bname = '张三';
    }

    getEname(){
        console.log(super.getName());//super.getName() 调用父类的方法
    }

    getSname(){
        return super.name;//super指向父类的原型prototype，所以这里取不到父类的实例属性name
    }
}


let ggo = new abb('class');
ggo.getEname();
console.log(ggo.getName());
console.log(ggo.getSname())