package SupperThis;

public class Student extends Person {
	private double score;

	public Student() {
//		1.super();//调用父类的无参构造方法，javac会自动加上
		super(null, 0);
		System.out.println("---Student()---");
	}

	public Student(String name, int age, double score) {
//		2.super();//调用父类的无参构造方法，javac会自动加上
		super(name, age); // 3.访问父类Person的有参构造方法
		System.out.println("---Student(String name,int age,double score)---");
//		4.使用 super(name,age);调用父类Person的有参构造方法后就可以不用下面两步实现赋值（就没有直接使用父类Person的属性）
//		5.此时 父类Person的属性就可以为 private的属性， 因为子类Student没有直接使用父类Person的属性，而是通过super(值，值)的方式调用父类Person的有参构造方法来实现赋值。
//		this.name=name;
//		this.age=age; 
		this.score = score;
		super.age = age; // 访问父类属性

	}

//	6.方法重写
	public void say() {
		super.say(); // 访问父类方法
		System.out.println("Student说：你好呀！"); //增加自己的属性
	}
	
//	6.方法重载
	public void say(String name) {
		System.out.println(name+"说：你好呀！"); //增加自己的属性
	}

	public void study() {
		super.say(); // 访问父类方法
		this.say(); //访问自己的方法
		System.out.println("--------day day up--------");
	}

}
