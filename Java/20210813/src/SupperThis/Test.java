package SupperThis;

public class Test {

	public static void main(String[] args) {
//		1.创建一份学生对象
//		先调用父类Person的无参构造函数，在调用Student构造方法
		Student stu=new Student();
		
//		2.创建一个Person对象
		Student stu1=new Student("李华",20,99);
		System.out.println(stu1);
		stu1.say(); //Student说：你好呀！ (为Student自己的say()方法)
		stu1.say("小小"); //小小说：你好呀！
	}
}
