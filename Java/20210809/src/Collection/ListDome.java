package Collection;

import java.util.List;
import java.util.ArrayList;

/**
 * 
 * @Title: List 接口
 * @Deseription:
 * @author 萝茗
 * @date 2021年8月9日
 * @version 1.0
 *
 */
public class ListDome {

	public static void main(String[] args) {
//		1.创建一个List集合
		List list = new ArrayList();
//		2.API
//		2.1 添加元素
		list.add("abc");
		list.add("def");
		list.add("123");
		list.add(456);
		System.out.println(list); // [abc, def, 123, 456]
//		2.2 将指定元素插入到指定位置
		list.add(1, "789");
		System.out.println(list); // [abc, 789, def, 123, 456]
//		2.3 移除指定位置的元素
		list.remove(2);
		System.out.println(list); // [abc, 789, 123, 456]
//		2.4 更新指定位置元素
		list.set(1, "111");
		System.out.println(list); // [abc, 111, 123, 456]
//		2.5 查找指定位置元素
		Object obj = list.get(2);
		System.out.println(obj); // 123
//		2.6 根据下标查找元素对象
		Object obj1 = list.indexOf(2);
		System.out.println(obj); // 123
//		2.7 截取一个集合
		List list1 = list.subList(1, 3);
		System.out.println(list1); // [111, 123]
	}

}
