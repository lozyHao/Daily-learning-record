package List;

import java.util.Stack;

/**
 * 
 * @Title: List接口类---Vector的子类--->Stack栈类
 * @Deseription: Object[]数组--栈的原理// Stack栈类
 * @author 萝茗
 * @date 2021年8月9日
 * @version 1.0
 *
 */
public class StackDeom {

	public static void main(String[] args) {
//		1.创建Stack
		Stack s = new Stack();
//		2.压栈
		s.push("1");
		s.push("3");
		s.push("5");
		s.push("7");
		s.push("2");
		s.push("4");
		System.out.println(s); // [1, 3, 5, 7, 2, 4]
//		3.出栈
		System.out.println(s.pop()); // 7
		System.out.println(s.pop()); // 5
		System.out.println(s.pop()); // 3
		System.out.println(s.pop()); // 1

		System.out.println(s); // [1, 3]
//		4.判断栈是否为空
		System.out.println(s.empty()); // false
//		5.搜索元素（下标位置）
		int index = s.search("3");
		System.out.println(index); // 1
	}

}
