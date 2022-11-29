(function () {
    class Person {
        // TS 可以在属性前面添加属性的修饰符
        /**
         * public 公共属性，可以随意修改
         * protected 保护属性
         * private 私有属性，外部无法访问
         */
        private _name: string;
        _age: number;
        protected _address: string;
        constructor(name: string, age: number, address: string) {
            this._name = name;
            this._age = age;
            this._address = address
        }

        set name(val: string) {
            if (val.length < 3 || val.length > 10) {
                console.log("字符太短或太长");
            } else {
                this._name = val;
            }
        }
        get name() {
            return this._name
        };
    }
    const per = new Person("孙悟空", 18, "四川省");
    console.log(per); // Person {_name: '孙悟空', _age: 18, "四川省"}
    // per._name="小明" // 报错
    per._age = 30
    console.log(per); // Person {_name: '孙悟空', _age: 30, "四川省"}
    per.name = "猪八戒"
    console.log(per.name); // 猪八戒

    class Xiao extends Person {
        text() {
            // console.log(this._name); // 报错
            console.log(this.name); // 小明
            console.log(this._address); // 访问 protected属性
        }
    }

    let pro1 = new Xiao("小明", 10, "重庆市");
    pro1.text(); // 重庆市
})();