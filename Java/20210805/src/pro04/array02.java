package pro04;

import java.util.Scanner;

/**
 * 
 * @Title: 数组基础应用--从控制台输入10个整数保存在数组中
 * @Deseription:
 * @author 萝茗
 * @date 2021年8月5日
 * @version 1.0
 *
 */
public class array02 {

	public static void main(String[] args) {
		int[] arr = getArray();
//		倒叙输出该数组
		for (int i = arr.length - 1; i >= 0; i--) {
			System.out.println("第" + (i + 1) + "个元素为：" + arr[i]);
		}

	}

//	赋值给数组
	private static int[] getArray() {
		int arr[] = new int[10];
		for (int i = 0; i < 10; i++) {
			System.out.println("请输入第" + (i + 1) + "个整数：");
			arr[i] = getInt();
		}
		return arr;
	}

//	从键盘输入
	private static int getInt() {
		Scanner sc = new Scanner(System.in);
		return sc.nextInt();
	}

}
