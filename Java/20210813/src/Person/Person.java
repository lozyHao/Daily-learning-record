package Person;
/**
 * 
 *@Title: 继承--案例一
 *@Deseription: Person类
 *@author 萝茗
 *@date 2021年8月13日
 *@version 1.0
 *
 */
public class Person {
	protected String name; //姓名
	protected boolean gender; //性别
	protected int age; //年龄
	public Person(){
		
	}
	public Person(String name, boolean gender, int age) {
		super();
		this.name = name;
		this.gender = gender;
		this.age = age;
	}
	public void move() {
		System.out.println(name+"正在行走....");
	}
	public void say() {
		System.out.println(name+"说：早上好！");
	}
}
