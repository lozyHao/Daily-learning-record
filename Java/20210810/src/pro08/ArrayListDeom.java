package pro08;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.ListIterator;

/**
 * 
 * @Title: 集合的遍历
 * @Deseription:
 * @author 萝茗
 * @date 2021年8月10日
 * @version 1.0
 *
 */
public class ArrayListDeom {

	public static void main(String[] args) {
//		1.定义一个集合
		ArrayList list = new ArrayList();

//		2.添加元素
		list.add(1);
		list.add(2);
		list.add(3);
		list.add("a");
		list.add("b");
		list.add("c");
		System.out.println("集合内容为：" + list);

//		3.使用 for循环 实现遍历
		for (int i = 0; i < list.size(); i++) {
			Object str = list.get(i);
			System.out.println(str);// 1 2 3 a b c
		}

//		4.使用迭代器遍历集合 Iterator 实现遍历
//		4.1 获取迭代器
		Iterator it = list.iterator();
//		4.2 判断下一个元素是否存在
		boolean isNext = it.hasNext();
		System.out.println(isNext); // true
//		4.3 获取next元素内容
		Object str1 = it.next();
		System.out.println(str1); // 1
//		4.4 遍历集合
		Iterator it1 = list.iterator();
		while (it1.hasNext()) {
			Object str2 = it1.next();
			System.out.println(str2); // 1 2 3 a b c
		}

//		5.使用 forEach 遍历集合
		for (Object obj : list) {
			Object str3 = obj;
			System.out.println(str3); // 1 2 3 a b c
		}

//		6.遍历集合--遍历过程中删除某元素
		ListIterator it2 = list.listIterator();
		while (it2.hasNext()) {
			Object str4 = it2.next();
			if (str4.equals("a")) {
				it2.remove();
				continue;
			}
			System.out.println(str4); //// 1 2 3 b c
		}
		System.out.println(list); // [1, 2, 3, b, c]
	}

}
