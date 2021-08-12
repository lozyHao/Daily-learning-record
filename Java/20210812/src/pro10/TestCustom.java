package pro10;

import java.util.Arrays;

public class TestCustom {

	public static void main(String[] args) {
//		2.创建一个消费者对象
		Custom custom=new Custom("张三",null);
//		1.创建一个产品对象
		Product pro1=new Product("板栗",custom);
		Product pro2=new Product("苹果",custom);
		Product pro3=new Product("橘子",custom);
//		3.定义数组
		Product[] ps= {pro1,pro2,pro3};
		custom.setPs(ps);
	}
}
