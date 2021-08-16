package Shape;

/**
 * 
 * @Title: 抽象类
 * @Deseription:
 * @author 萝茗
 * @date 2021年8月16日
 * @version 1.0
 *
 */
//声明抽象列
public abstract class Shape extends Object{
	public Shape() {
	}
	// 1.求周长的方法
	public abstract double getLen();

//	2.求面积的方法
	public abstract double getArea();
}
