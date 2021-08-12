package pro10;
/**
 * 
 *@Title: 单项关联关系
 *@Deseription: 地址类
 *@author 萝茗
 *@date 2021年8月12日
 *@version 1.0
 *
 */
public class Address {
	private String province;
	private String city;
	
	public Address(String province,String city) {
		this.province=province;
		this.city=city;
		System.out.println(province+city);
	}
}
