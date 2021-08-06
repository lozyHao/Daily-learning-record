package Student;

public class StudentDome {
//	
	public static void main(String[] args) {
//		1.定义变量
		int i;
		String str;
		/**
		 * object02：类（数据类型） obj：变量名（引用）
		 */
		Student obj;

//		2.类和对象 引用 属性 方法之间的关系
//		2.1.定义引用
		Student s;
//		2.2.创建一个对象
		s = new Student();
//		2.3.访问属性
//		2.3.1属性赋值
		s.name = "小明";
		s.age = 25;
		s.gender = true;
//		2.3.2取值
		String n = s.name;
		int a = s.age;
		boolean g = s.gender;
		System.out.println("姓名：" + n + "，年龄：" + a + "，性别：" + g);

//		2.4.访问属性
		String nam=s.getName();
		System.out.println("姓名为："+nam);
		s.study();
	}
}
