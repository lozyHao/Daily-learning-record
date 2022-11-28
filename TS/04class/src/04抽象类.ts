(function () {
    // 抽象类 abstract
    abstract class Animal {
        name: String;
        constructor(name: string) {
            this.name = name;
        }
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello(): void;
    }
    class Dog extends Animal {
        // 覆盖重写
        sayHello(str: string = "hhh"): void {
            console.log(this.name + "在叫！！！" + str);
        }
    }
    const dog = new Dog("旺财");
    dog.sayHello();
})();