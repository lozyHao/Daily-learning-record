package List;

import java.util.LinkedList;

/**
 * 
 * @Title: List接口类---LinkedList类
 * @Deseription: 双链表
 * @author 萝茗
 * @date 2021年8月9日
 * @version 1.0
 *
 */
public class LinkedListDeom {

	public static void main(String[] args) {
//		1.创建LinkedList
		LinkedList link = new LinkedList();
//		2.API
//		2.1 添加元素
		link.add("123");
		link.add("abc");
		link.add("456");
		link.add("def");
		link.add("789");
		System.out.println(link); // [123, abc, 456, def, 789]
//		2.2 添加元素到头结点
		link.addFirst("000");
		System.out.println(link); // [000, 123, abc, 456, def, 789]
//		2.3 添加元素到尾结点
		link.addLast("999");
		System.out.println(link); // [000, 123, abc, 456, def, 789, 999]
//		2.4 将元素推入此列表所表示的堆栈(放到集合首部)
		link.push("3");
		System.out.println(link); // [3, 000, 123, abc, 456, def, 789, 999]
//		2.5 移除并返回此列表的第一个元素
		link.removeFirst();
		System.out.println(link); // [000, 123, abc, 456, def, 789, 999]
//		2.6 移除并返回此列表的最后一个元素
		link.removeLast();
		System.out.println(link); // [000, 123, abc, 456, def, 789]
//		2.7 从此类表所表示的堆栈处弹出一个元素
		link.poll();
		System.out.println(link); // [123, abc, 456, def, 789]
//		2.8 获取指定下标的元素
		Object str = link.get(2);
		System.out.println(str); // 456
//		2.9 获取第一个元素
		System.out.println(link.getFirst()); // 123
//		2.10 获取最后一个元素
		System.out.println(link.getLast()); // 789
	}

}
