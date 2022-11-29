// 泛型
function fn<T>(a: T): T {
    console.log(a);
    return a;
}
fn(7) // 7
fn<string>("string") // string

// 多个泛型
function fn2<T, K>(a: T, b: K): T {
    console.log(a);
    return a;
}
fn2<number, string>(20, "string"); // 20

// 泛型继承，表示泛型T必须是Inter的实现类（子类）
interface Inter {
    length: number;
}
function fn3<T extends Inter>(a: T): number {
    console.log(a.length);
    return a.length;
}
fn3<string>("string"); // 6
fn3([1, 23, 4, 5]); // 4

// 泛型在类中的使用
class MyClass<T>{
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}
const mc = new MyClass<string>("小明");