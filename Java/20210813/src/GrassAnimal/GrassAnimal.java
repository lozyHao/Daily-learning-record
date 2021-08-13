package GrassAnimal;
/**
 * 
 *@Title: 继承--案例二
 *@Deseription: GrassAnimal类
 *@author 萝茗
 *@date 2021年8月13日
 *@version 1.0
 *
 */
public class GrassAnimal {
	protected String name;
	public GrassAnimal() {
	}
	public GrassAnimal(String name) {
		this.name = name;
	}
	public void eatDrass() {
		System.out.println(name+"吃草...");
	}
}
