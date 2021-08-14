package pro12;

/**
 * 
 * @Title: 多态
 * @Deseription: 方法的重载、重写、数据动态绑定、引用数据的类型转换
 * @author 萝茗
 * @date 2021年8月14日
 * @version 1.0
 *
 */
public class TestStudnet {

	public static void main(String[] args) {
//		1.行为多态
//		1.1.重载(两种创建对象赋值的方式)
//		1.1.1 通过无参构造方法创建对象，由set的方式赋值
		Student stu = new Student(); // 创建一个学生对象
		stu.setName("Andy");
		stu.setAge(20);
		stu.setGender(true);
		stu.setScore(90);
//		1.1.2 通过有参构造方法赋值
		Student stu1 = new Student("Tom", 23, true, 88);

//		1.1.3 父类和子类有相同方法名,参数列表不同的方法，实现重载（根据传参执行对应方法）
		stu1.eat("龙虾"); // 今天吃点龙虾 (Person父类的方法)
		stu1.eat(5); // 今天吃点了 5 碗饭 （Student子类的方法）
//		1.1.4 父类和子类有相同的方法，子类覆盖父类的方法实现重载，执行子类方法
		stu1.say(); // 你好呀！！！ 此次考试得分：88.0

//		1.2.重写
//		1.2.1 父类对象p引用子类对象Student实例（子类对象即使父类对象）
		Person p = stu1;
		p.say(); // 此次考试得分：88.0

//		1.2.2 父类对象p引用子类对象Teacher实例（子类对象即使父类对象）
		p = new Teacher("Tey", 40, true, 4000);
		p.say(); // 同学们好好学习，天天向上！！！

//		2.引用多态
		Person p1 = new Student("Adeyt", 20, true, 92);
			   p1 = new Teacher("Feny", 45, false, 4000);

//		3.动态绑定
		/** 编译阶段和执行阶段类型不一致的现象
		 * javac：编译阶段（检查语法） p2:Person p2.say()方法 ---> Person里面的say()方法  (必须通过才能执行，所以当Person、里面没有say()方法时，编译就会报错) 
		 * java ：执行阶段（创建对象）p2:Student p2.say()方法 ---> Student里面的say()方法
		 */
		Person p2 = new Student("Adey", 20, true, 92);
		p2.say(); //此次考试得分：92.0
		
//		4.引用数据的类型转换
		Student stu2 = new Student("Tom", 23, true, 88);
//		4.1 自动转换 stu2：Student  p3:Person  Student --> Person (子类对象就是父类对象)
		Person p3=stu2; 
		p3.say(); //此次考试得分：88.0
//		4.2 强制类型转换 p3:Person stu3：Student  Person --> Student 不可行
		Student stu3=(Student) p3;
		stu3.say(); //此次考试得分：88.0
//		4.3 类型转换异常  java.lang.ClassCastException (同一父类的子类相互转换报错)
//		Person p4 = new Teacher("Feny", 45, false, 4000);
//		Student stu4=(Student) p4; //java.lang.ClassCastException报错
//		 解决转换问题(instanceof 检查对象的类型)
		Person p4 = new Teacher("Feny", 45, false, 4000);
		boolean isClass=p4 instanceof Student;
		if(isClass) {
			Student stu4=(Student) p4;
		}else {
			System.out.println("类型不匹配，不能强制转换！！！"); //类型不匹配，不能强制转换！！！
		}
	}
}
