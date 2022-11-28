class Person {
    // 定义属性
    name: string = "小明";
    age: number = 20;
    // 定义静态属性 static (直接通过类访问，不用实例对象)
    static grade: string = "高一"
    // 只读属性，不能修改 readonly
    readonly gender: number = 0;
    static readonly address: string = "四川省";

    say() {
        console.log("hello typescript!");
    }
}

const per = new Person();
console.log(per); // Person {name: '小明', age: 20}
per.name = "小华"
console.log(per); // Person {name: '小华', age: 20, gender: 0}

console.log(Person.grade); // 高一
Person.grade = "高三"
console.log(Person.grade); // 高三

console.log(per.gender); // 0
console.log(Person.address); // 四川省

per.say(); // hello typescript!






