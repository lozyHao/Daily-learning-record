package pro9;

public class PersonDemo {

	public static void main(String[] args) {
//		1.创建一个Person()
		Person p =new Person("小红",18);
		
		String n=p.getName();
		System.out.println(n);
		
		int a=p.getAge();
		System.out.println(a);
		
		Person p1=new Person();
//		2.访问属性：给属性赋值，获取属性的值(私有变量无法直接访问)
//		p1.name="小明";
//		String name1=p1.name;
//		p1.age=20;
//		int age1=p1.age;
		p1.setName("小明");
		String name=p1.getName();
		System.out.println(name);
		
		p1.setAge(20);
		int age=p1.getAge();
		System.out.println(age);
		
//		3.访问方法
		p1.say();
	}

}
