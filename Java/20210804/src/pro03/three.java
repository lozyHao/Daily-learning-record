package pro03;

import java.util.Scanner;

/**
 * 
 * @Title:函数简单引用--简易计算器
 * @Deseription:
 * @author 萝茗
 * @date 2021年8月4日
 * @version 1.0
 *
 */
public class three {

	public static void main(String[] args) {
//		1.模拟窗口
		while (true) {
//			3.打印菜单提示
			System.out.println("请选择：[1]+  [2]-  [3]*  [4] /  [-1]退出");
//			4.输入一个整数选择
			int menu = getInt();
//			2.模拟关闭按钮
			if (menu == -1) {
				System.out.println("退出软件系统！");
				break;
			}
//			5.校验菜单
			boolean isCheck = check(menu);
			if (isCheck) {
//				6.校验通过，处理菜单
				proccess(menu);
			} else {
				System.out.println("校验失败！请重新输入！！！");
			}

		}

	}

//	从键盘获取输入的值
	public static int getInt() {
		Scanner sc = new Scanner(System.in);
		return sc.nextInt();
	}

//	校验菜单数字
	public static boolean check(int menu) {
		if (menu >= 1 && menu <= 4) {
			return true;
		} else {
			return false;
		}
	}

//	运算处理
	public static void proccess(int menu) {
		System.out.println("请输入第一个数字：");
		int a = getInt();
		System.out.println("请输入第二个数字：");
		int b = getInt();
		if (menu == 1) {
			int sum = add(a, b);
			System.out.println("求和结果为：" + sum);
		} else if (menu == 2) {
			int sub = sub(a, b);
			System.out.println("減法结果为：" + sub);
		} else if (menu == 3) {
			int mut = mut(a, b);
			System.out.println("乘法结果为：" + mut);
		} else if (menu == 4) {
			int div = div(a, b);
			System.out.println("除法结果为：" + div);
		}
	}

//	加法、減法、乘法、除法运算
	public static int add(int a, int b) {
		return a + b;
	}

	public static int sub(int a, int b) {
		return a - b;
	}

	public static int mut(int a, int b) {
		return a * b;
	}

	public static int div(int a, int b) {
		return a / b;
	}

}
