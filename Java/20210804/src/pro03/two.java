package pro03;
/**
 * 
 *@Title:函数分类
 *@Deseription:基本数据类型/引用数据类型作为参数下不同调用效果
 *@author 萝茗
 *@date 2021年8月4日
 *@version 1.0
 *
 */
public class two {

	public static void main(String[] args) {
		

//		1.两个基本数据类型--传递值
		int a = 10;
		int b = 20;
		int c = fun01Add(a, b);
		System.out.println("求和c=" + c);

//		2.两个引用类型--传递地址（会改变形参的值）
		StringBuilder s1 = new StringBuilder("abc");
		StringBuilder s2 = new StringBuilder("123");

		StringBuilder sb = concat(s1, s2);
		System.out.println("sb=" + sb);

	}

	public static int fun01Add(int m, int n) {
		return m + n;
	}

	public static StringBuilder concat(StringBuilder st1, StringBuilder st2) {
		StringBuilder st3 = st1.append(st2);
		return st3;
	}
}
