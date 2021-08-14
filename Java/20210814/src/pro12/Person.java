package pro12;
public class Person {
	private String name;
	private int age;
	private boolean gender;

	public Person() {

	}
	public Person(String name, int age, boolean gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
	
	public void say() {
		System.out.println("你好呀！！！");
	}
	public void eat(String food) {
		System.out.println("今天吃点"+food);
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public boolean isGender() {
		return gender;
	}
	public void setGender(boolean gender) {
		this.gender = gender;
	}

}
