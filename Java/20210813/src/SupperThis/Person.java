package SupperThis;

public class Person {
	private String name;
	protected int age;
	public Person() {
		System.out.println("---Person()---");
	}
	public Person(String name,int age) {
		System.out.println("---Person(String name,int age)---");
		this.name=name;
		this.age=age;
	}
	public void say() {
		System.out.println(this.name+" 说：你好呀！");
	}
	public void eat() {
		System.out.println(this.name+" 说：早上好！");
	}
}
