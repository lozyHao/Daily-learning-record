package pro10;
/**
 * 
 *@Title: 双向关联
 *@Deseription: Customer类
 *@author 萝茗
 *@date 2021年8月12日
 *@version 1.0
 *
 */
public class Custom {
	private String name;
	private Product[] ps;
	public Custom(String name, Product[] ps) {
		this.name = name;
		this.ps = ps;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Product[] getPs() {
		return ps;
	}
	public void setPs(Product[] ps) {
		this.ps = ps;
	}
	
}
