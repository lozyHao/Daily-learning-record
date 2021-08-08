package pro06;

public class TestPerson {

	public static void main(String[] args) {
		Person p;
		p = new Person();

//		访问属性
		p.name = "小华";
		
//		访问方法
		p.a();
		
//		使用 类名 访问静态属性
		Person.a = 5;


//		使用 类名 访问静态方法
		Person.out();
	}

}
