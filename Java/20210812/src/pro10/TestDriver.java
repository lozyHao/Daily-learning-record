package pro10;
/**
 * 
 *@Title: 依赖关系
 *@Deseription: 司机驾驶汽车
 *@author 萝茗
 *@date 2021年8月12日
 *@version 1.0
 *
 */
public class TestDriver {

	public static void main(String[] args) {
//		1.创建一个司机对象
		Driver driver=new Driver();
//		2.创建一个汽车对象
		Car car=new Car();
//		3.驾驶汽车
		driver.driver(car);

	}

}
