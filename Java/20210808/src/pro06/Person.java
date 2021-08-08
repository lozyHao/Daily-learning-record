package pro06;

/**
 * 
 * @Title:static 关键字
 * @Deseription:
 * @author 萝茗
 * @date 2021年8月8日
 * @version 1.0
 *
 */
public class Person {
//	静态块只会执行一次
//	在构造方法之前执行
//	应用场景：加载配置文件、加载驱动程序
//	注意：因此对于静态方法来说，是没有this的。
//		在静态方法中不能访问类的非静态成员变量和非静态成员方法
//		非静态成员方法/变量都是须依赖具体的对象才能够被调用。

	String name;

//	2.静态属性
	static int a = 4;

//	1.静态块
	static {
		System.out.println("Person中静态块");
	}

	public Person() {
		System.out.println("无参构造方法");
	}

	public Person(String name) {
		this.name = name;
	}
	void a() {
		out();
	}

//	3.静态方法
	public static void out() {
		System.out.println("输出！");
	}

	public static void main(String[] args) {
		// TODO 自动生成的方法存根

	}

}
