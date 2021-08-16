package Shape;

public class Circle extends Shape{
	private int r;

	public Circle(int r) {
		super();
		this.r = r;
	}
//	继承抽象类，要么是抽象类，要么就必须有继承类的实现方法
	@Override
	public double getLen() {
		// TODO 自动生成的方法存根
		return Math.PI*2*r;
	}

	@Override
	public double getArea() {
		// TODO 自动生成的方法存根
		return Math.PI*r*r;
	}
	
}
