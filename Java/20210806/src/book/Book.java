package book;
/**
 * 
 *@Title:类和对象的入门--实例2
 *@Deseription:创建书类 属性：书名、出版社、价格、作者、页数
 *@author 萝茗
 *@date 2021年8月6日
 *@version 1.0
 *
 */
public class Book {
	String name;
	String press;
	double price;
	int count;
	
//	1.输出书籍信息
	public void showInfo() {
		System.out.println("书名："+name+"\n出版社："+press+"\n价格："+price+"元\n页数："+count+"页");
	}
	
	public static void main(String[] args) {
		// TODO 自动生成的方法存根

	}

}
