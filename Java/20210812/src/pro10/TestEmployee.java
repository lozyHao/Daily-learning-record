package pro10;
/**
 * 
 *@Title: 自关联
 *@Deseription: TestEmployee测试类
 *@author 萝茗
 *@date 2021年8月12日
 *@version 1.0
 *
 */
public class TestEmployee {
	public static void main(String[] args) {
		Employee manager=new Employee("王五",null);
		Employee emp=new Employee("张三", manager);
	}
}
