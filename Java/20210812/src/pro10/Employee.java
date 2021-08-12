package pro10;
/**
 * 
 *@Title: 自关联
 *@Deseription: Employee类
 *@author 萝茗
 *@date 2021年8月12日
 *@version 1.0
 *
 */
public class Employee {
	private String name;
	private Employee manager;
	public Employee(String name,Employee manager) {
		this.name=name;
		this.manager=manager;
	}
}
