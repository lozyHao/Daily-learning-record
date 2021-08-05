package pro04;

import java.util.*;
import java.util.Scanner;

/**
 * 
 * @Title:数组高级特性应用--扑克牌游戏项目
 * @Deseription:
 * @author 萝茗
 * @date 2021年8月5日
 * @version 1.0
 *
 */
public class array04 {
	static String[] pokers;//定义为成员变量

	public static void main(String[] args) {
		/**
		 * 4种花色 黑桃 红桃 方块 梅花 字符 2-10 J-A 王 大王\小王
		 */

//		1.模拟软件
		while (true) {
//			3.打印提示信息
			System.out.println("【1】创建牌 【2】洗牌 【3】发牌 【-1】退出游戏");
//			4.从控制台获取一个整数
			int menu = getInt();
//			2.模拟关闭按钮
			if (menu == -1) {
				break;
			}
//			5.校验菜单
			boolean isCheck = check(menu);
			if (!isCheck) {
				System.out.println("输入数字违法！请重新输入！！！");
				continue;
			}
//			6.处理菜单
			process(menu);
		}
	}

//	处理菜单
	private static void process(int menu) {
		if (menu == 1) {
//			创建牌
			pokers = create();
			System.out.println("创建牌的内容为：" + Arrays.toString(pokers));
		} else if (menu == 2) {
//			洗牌
			pokers = random(pokers);
			System.out.println("洗牌牌的内容为：" + Arrays.toString(pokers));
		} else if (menu == 3) {
//			发牌
			fetch(pokers);
		}
	}

//	发牌
	private static void fetch(String[] pokers) {
//		1.定义三个玩家，分别有17张牌
		String[] p1=new String[0];
		String[] p2=new String[0];
		String[] p3=new String[0];
//		3.遍历数组
		for (int i = 0; i < pokers.length-3; i++) {
			if(i%3==0) {
				p1=Arrays.copyOf(p1, p1.length+1);
				p1[p1.length-1]=pokers[i];
			}else if(i%3==1) {
				p2=Arrays.copyOf(p2, p2.length+1);
				p2[p2.length-1]=pokers[i];
			}else if(i%3==2) {
				p3=Arrays.copyOf(p3, p3.length+1);
				p3[p3.length-1]=pokers[i];
			}
		}
		System.out.println("玩家1："+Arrays.toString(p1));
		System.out.println("玩家2："+Arrays.toString(p2));
		System.out.println("玩家3："+Arrays.toString(p3));
	}

//	洗牌
	private static String[] random(String[] srcPokers) {
//		2.定义一个目标数组
		String[] destPokers = new String[srcPokers.length];
//		4.标识数组
		boolean[] flags = new boolean[srcPokers.length];
//		3.随机数要拿54次

		for (int i = 0; i < srcPokers.length; i++) {
//			 1.产生随机数
			Random ran = new Random();
			int index = ran.nextInt(srcPokers.length);
//			5.获取当前下标的标识
			boolean flag = flags[index];
//			6.如果标识为true，标识该张牌已被洗牌
			if (flag) {
				i--;
			} else {
				destPokers[i] = srcPokers[index];
				flags[index] = true;// 复制到目标数组后将该下标设置为true
			}

		}
		return destPokers;
	}

//	创建牌
	private static String[] create() {
//		1.准备花色
		String[] colors = { "红桃", "黑桃", "梅花", "方块" };
//		2.准备字符
		String[] numbers = { "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" };
//		3.王的数组
		String[] kings = { "大王", "小王" };
//		5.定义目标数组
		String[] destPokers = new String[0];
//		4.完成组合
		for (int i = 0; i < colors.length; i++) {
			for (int j = 0; j < numbers.length; j++) {
				destPokers = Arrays.copyOf(destPokers, destPokers.length + 1);
				destPokers[destPokers.length - 1] = colors[i] + numbers[j];
//				System.out.println(colors[i] + numbers[j]);
			}
		}
//		6.拷贝王
		destPokers = Arrays.copyOf(destPokers, destPokers.length + kings.length);
		System.arraycopy(kings, 0, destPokers, destPokers.length - kings.length, kings.length);

//		System.out.println(Arrays.toString(destPokers));
		return destPokers;
	}

//	键盘输入
	private static int getInt() {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		return num;
	}

//	校验菜单
	private static boolean check(int menu) {
		if (menu >= 1 && menu <= 3) {
			return true;
		}
		return false;
	}

}
