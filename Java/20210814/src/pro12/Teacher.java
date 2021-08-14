package pro12;

public class Teacher extends Person{
	private double salary;

	public Teacher() {
		
	}
	public Teacher(String name, int age, boolean gender, double salary) {
		super(name, age, gender);
		this.salary = salary;
	}
	
	public void say() {
		System.out.println("同学们好好学习，天天向上！！！");
	}
	
}
