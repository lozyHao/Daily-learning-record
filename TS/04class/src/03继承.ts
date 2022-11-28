(function () {
    // 定义动物类  
    class Animal {
        name: String;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        sayHello(): void {
            console.log("动物在叫！！！");
        }
    }
    // 狗——继承动物类
    class Dog extends Animal {
        gender: number;
        // 覆盖重写
        sayHello(str: string = "hhh"): void {
            console.log(this.name + "在叫！！！" + str);
            // super调用父类的sayHello()方法
            super.sayHello()
        }
        say(str: string = '旺旺'): void {
            console.log(this.name + str);
        }
        run(): void {
            console.log(`${this.name} 在跑~`);
        }
        // 如果子类中写了构造函数，在子类够着函数中必须调用父类构造函数
        constructor(name: string, age: number, gender: number) {
            super(name, age);
            this.gender = gender;
        }
    }
    const dog = new Dog("旺财", 2, 0);
    dog.sayHello();
    dog.run();
    dog.say("旺旺旺旺旺旺！"); // 旺财旺旺旺！！！

    // 猫——继承动物类
    class Cat extends Animal { }
    const cat = new Cat("咪咪", 3)
    cat.sayHello();
})()