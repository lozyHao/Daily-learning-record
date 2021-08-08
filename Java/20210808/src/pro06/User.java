package pro06;
//import 引入包
import pro06.TestUser;
/**
 * 
 * @Title: User类
 * @Deseription:类和对象之间的关系
 * @author 萝茗
 * @date 2021年8月8日
 * @version 1.0
 *
 */
public class User {
//	1.构造方法：
//	1.1 意义：用于对象的创建 属性初始化
//	1.2 要求：和类同名 无返回值
//	1.3 类和对象之间的关系：类（模板）----构造方法的参数、构造方法---->对象
//	1.4 语法：public 类名(数据类型 参数,...){}
//	1.5 特点：构造方法在创建对象的时候被调用。
//			构造方法可以有多个方法名相同，但参数类型或参数个数不同（方法的重载）。
//			如果类中无构造方法，那么javac会自动添加无参构造方法（默认构造方法）。
//			果类中存在构造方法，那么javac阶段不会添加无参构造方法。

//	2.面向对象编程的关键字
//	2.1 this 关键字
//		“我的”，用于在类的内部访问构造方法、属性、方法。
//	2.2 package 关键字
//		用于定义包 package 包名
//	2.3 import 关键字
//		引用同一个项目中的包 import 包名.类名
//	2.4 static 关键字  静态的 静止的
//		静态块只会执行一次
//		在构造方法之前执行
//		应用场景：加载配置文件、加载驱动程序
	
//	公用变量
	String userName;
	String passWord;
	boolean gender;
	int age;
	String createDate;

//	无参构造方法
	public User() {
//		该 this 调用自己的构造方法，根据传参调用对应的构造方法；
		this("user", "user", true, 10, "2021-08-08");// 必须放在第一句
		System.out.println("无参构造方法被调用了！");

	}

//	有参构造方法
	public User(String userName, String passWord, boolean gender, int age, String createDate) {
//		this 访问属性
//		当属性和形参名相同时，需要加上this（javac会默认就近原则两个都是形参）
		this.userName = userName;
		this.passWord = passWord;
		this.gender = gender;
		this.age = age;
		this.createDate = createDate;
		System.out.println(userName + passWord + gender + age + createDate);
		System.out.println("有参构造方法被调用了！");
//		this 访问方法
//		调用方法时，可以不加this，javac会自动加上
		this.login();
	}

//	公用方法
	public void login() {
		System.out.println(userName + " 正在登陆！");
	}

	public void reg() {
		System.out.println(userName + " 正在注册！");
	}

	public void logout() {
		System.out.println(userName + " 退出了！");
	}
}
