class Person{
    constructor(name) {
        this.name = name
    }
    getname(){
        return this.name
    }
}

const xiaoming = new Person('小明')
alert(xiaoming.getname())

class Car{
    constructor(carnum,name){
        this.carnum = carnum
        this.name = name
        this.mile = 5
    }
}

class Fastcar extends Car{
    constructor(carnum,name){
        super(carnum,name)
        this.price = 2
    }
}

class Slowcar extends Car{
    constructor(carnum,name){
        super(carnum,name)
        this.price = 1
    }
}