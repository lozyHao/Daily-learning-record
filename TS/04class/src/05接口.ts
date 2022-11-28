(function () {
    /**
     * 声明一个类型
     * 同一个名字只能定义一个
     */
    type myType = {
        name: string,
        age: number
    }
    /**
     * 定义接口
     * 定义一个类中应该包含那些属性和方法
     * 可以当成类型声明去使用
     * 可以在定义类的时候闲置类的结构
     */
    interface myInterface {
        name: string;
        age: number;
        say(): void;
    }
    interface myInterface {
        gender: string
    }

    // 定义对象
    const obj: myInterface = {
        name: "小猪猪",
        age: 20,
        gender: "男",
        say(): void {
            console.log(this.name + " 笑了！！！");
        }
    }
    obj.say(); // 小猪猪 笑了！！！

    /**
     * 实现接口
     * 使类满足接口的要求
     */
    class MyClass implements myInterface {
        name: string;
        age: number;
        gender: string;
        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        say(): void {
            console.log(this.name + " 哈哈哈哈大笑！！！");
        }
    }
    const myclass = new MyClass("小明", 20, "男");
    myclass.say(); // 小明 哈哈哈哈大笑！！！
})();