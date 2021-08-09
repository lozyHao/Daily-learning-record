package List;

import java.util.ArrayList;

/**
 * 
 * @Title: List接口类---ArrayList类
 * @Deseription: 顺序表
 * @author 萝茗
 * @date 2021年8月9日
 * @version 1.0
 *
 */
public class ArrayListDeom {

	public static void main(String[] args) {
//		1.创建一个ArrayList
		ArrayList list = new ArrayList();
//		2.API
//		2.1 添加元素
		list.add("abc");
		list.add("def");
		list.add("123");
		list.add(456);
		System.out.println(list); // [abc, def, 123, 456]
//		2.2 指定下标位置插入元素
		list.add(1, 456);
		System.out.println(list); // [abc, 456, def, 123, 456]
//		2.3 查找元素（下标）
		String str = (String) list.get(0);
		System.out.println(str); // abc
//		2.4 添加集合到指定位置
		list.addAll(1, list);
		System.out.println(list); // [abc, abc, 456, def, 123, 456, 456, def, 123, 456]
		
//		2.5 正向查找
		int index=list.indexOf("abc");
		System.out.println(index); //0
//		2.6 反向查找
		index=list.lastIndexOf("abc");
		System.out.println(index); //1
	}

}
