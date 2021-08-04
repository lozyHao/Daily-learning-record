package pro03;

/**
 *
 *@Title: 函数
 *@Deseription:函数定义及调用
 *@author 萝茗
 *@date 2021年8月4日
 *@version 1.0
 *
 */

public class one {
	
	public static void main(String[] args) {

//		2.函数调用
		fun01();
		int c=fun02Add(7,8);//传入实参，将返回值接收
		System.out.println("c:"+c);//15
	}

//	1.函数定义
//	静态成员方法
	public static void fun01() {
		System.out.println("Hello Java!");//Hello Java!
	}
	public static int fun02Add(int a,int b) {//函数定义时，声明形参
		int sum=a+b;
		return sum;//含有返回值的函数
	}
}
