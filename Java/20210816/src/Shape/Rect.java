package Shape;

public class Rect extends Shape{
	private int length;
	private int height;
	
	public Rect() {
		super();
		// TODO 自动生成的构造函数存根
	}

	public Rect(int length, int height) {
		super();
		this.length = length;
		this.height = height;
	}
//	继承抽象类，要么是抽象类，要么就必须有继承类的实现方法
	@Override
	public double getLen() {
		// TODO 自动生成的方法存根
		return (length+height)*2;
	}

	@Override
	public double getArea() {
		// TODO 自动生成的方法存根
		return length*height;
	}
	
}
