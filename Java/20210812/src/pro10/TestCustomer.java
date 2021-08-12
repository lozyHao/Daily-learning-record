package pro10;
/**
 * 
 *@Title: 单项关联关系
 *@Deseription: 顾客测试类
 *@author 萝茗
 *@date 2021年8月12日
 *@version 1.0
 *
 */
public class TestCustomer {

	public static void main(String[] args) {
		Address address = new Address("四川省", "广安市");
		Customer c = new Customer(address);
	}

}
