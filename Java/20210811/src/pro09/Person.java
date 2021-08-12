package pro09;

public class Person {

//	私有变量，外部类无法访问
	private String name;
	private int age;

//	实现外部访问的方法
//	给name属性提供赋值的方法
	public void setName(String name) {
		this.name = name;
	}

//	给name属性提供取值的方法
	public String getName() {
		return this.name;
	}

	public void setAge(int age) {
		if(age>0&&age<120) {
			this.age = age;
		}
		System.out.println("非法数据！");
	}

	public int getAge() {
		return this.age;
	}

	public Person() {

	}

	public Person(String name, int age) {
		this.name = name;
		this.age = age;
	}

	public void say() {
		System.out.println(this.name + "说：今天天气真好！！！");
	}

}
