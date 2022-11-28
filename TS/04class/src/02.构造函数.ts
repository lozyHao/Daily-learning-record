class Dog {
    name: string;
    age: number;
    bark() {
        console.log("汪汪汪！我是" + this.name);
    }
    // 构造函数
    constructor(name: string, age: number) {
        // 构造函数中，this指向当前实例对象
        this.name = name;
        this.age = age;
    }
}

let dogOne = new Dog("旺财", 12);
let dogTwo = new Dog("小黑", 5);

console.log(dogOne); // Dog {name: '旺财', age: 12}
console.log(dogOne.bark()); // 汪汪汪！我是旺财
console.log(dogTwo); // og {name: '小黑', age: 5}
