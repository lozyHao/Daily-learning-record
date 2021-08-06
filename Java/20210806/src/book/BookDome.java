package book;

public class BookDome {

	public static void main(String[] args) {
//		1.创建对象
		Book b=new Book();
//		2.调用方法属性
		b.name="西游记";
		b.press="人民出版社";
		b.price=54;
		b.count=458;
		
//		3.调用方法
		b.showInfo();

	}

}
