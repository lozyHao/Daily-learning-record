package pro04;

import java.util.Arrays;

/**
 * 
 * @Title: 数组基础
 * @Deseription: 数组的基本语法
 * @author 萝茗
 * @date 2021年8月5日
 * @version 1.0
 *
 */
public class array01 {

	public static void main(String[] args) {
//		 1.定义数组
		int[] arr;
		boolean[] arr1;
		String[] arr2;
		double[] arr3;

//		2.数组的初始化
//		2.1静态初始化
		int[] array = { 10, 6, 7, 12, 32, 43 };
		System.out.println("数组array的元素为:" + Arrays.toString(array));// [10, 6, 7, 12, 32, 43]

//		2.2动态初始化
//		第一种
		int[] ar;
		ar = new int[] { 12, 5, 6, 8, 4, 2 };
		System.out.println("数组ar的元素为:" + Arrays.toString(ar));// [12, 5, 6, 8, 4, 2]
//		第二种
		int[] ar1 = new int[5];
		System.out.println("数组ar1的元素为:" + Arrays.toString(ar1));// [0, 0, 0, 0, 0]
		boolean[] ar2 = new boolean[5];
		System.out.println("数组ar2的元素为:" + Arrays.toString(ar2));// [false, false, false, false, false]

//		3.数组元素的访问
		System.out.println("数组ar的第一个元素为:" + ar[0]);// 数组ar的第一个元素为:12
		System.out.println("数组ar的第四个元素为:" + ar[3]);// 数组ar的第四个元素为:8
		System.out.println("数组ar的元素个数为:" + ar.length);// 数组ar的元素个数为:6

//		4.数组的遍历
//		a.正向遍历
		for (int i = 0; i < ar.length; i++) {
			System.out.println("数组ar第" + (i + 1) + "个元素个数为:" + ar[i]);
		}
//		b.反向遍历
		for (int i = ar.length - 1; i >= 0; i--) {
			System.out.println("数组ar第" + (i + 1) + "个元素个数为:" + ar[i]);
		}

	}

}
