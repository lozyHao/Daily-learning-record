package Person;
/**
 * 
 *@Title: 继承--案例一
 *@Deseription: Teacher类-继承Person类
 *@author 萝茗
 *@date 2021年8月13日
 *@version 1.0
 *
 */
public class Teacher extends Person {
	private double salary; // 薪水

	public Teacher() {

	}
	public Teacher(String name, boolean gender, int age, double salary) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.salary = salary;
	}
	public void teaching() {
		System.out.println(this.name + "正在授课...");
	}
	public void assignHomework() {
		System.out.println(this.name + "正在布置作业...");
	}
}
