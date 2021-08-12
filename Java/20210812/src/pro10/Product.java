package pro10;
/**
 * 
 *@Title: 双向关联
 *@Deseription: Product类
 *@author 萝茗
 *@date 2021年8月12日
 *@version 1.0
 *
 */
public class Product {
	private String name;
	private Custom custom;
	public Product(String name, Custom custom) {
		this.name = name;
		this.custom = custom;
	}
}
