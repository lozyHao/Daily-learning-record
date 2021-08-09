package Collection;

import java.util.ArrayList;
import java.util.Collection;

/**
 * 
 * @Title:集合类--Collection 能存储任意对象，长度是可以改变的，随着元素的增加而增加，随着元素的减少而减少
 * @Deseription:Collection 为解决数组长度固定的情况
 * @author 萝茗
 * @date 2021年8月9日
 * @version 1.0
 *
 */
public class CollectionDemo {

	public static void main(String[] args) {
//		1.创建一个集合
		Collection c = new ArrayList();
//		2.API
//		2.1 添加元素
		c.add("123");
		c.add(true);
		c.add(1);
		System.out.println("删除之前：" + c); // 删除之前：[123, true, 1]
//		2.2 删除指定对象
		c.remove(true);
		System.out.println("删除之后：" + c); // 删除之后：[123, 1]
//		2.3 集合元素个数
		System.out.println("元素个数：" + c.size()); // 2
//		2.4 判断是否包含对象
		boolean isContains = c.contains(1);
		System.out.println(isContains); // true
//		2.5 清空集合
		c.clear();
		System.out.println(c); // []

	}

}
