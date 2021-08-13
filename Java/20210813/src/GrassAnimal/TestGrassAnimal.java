package GrassAnimal;
/**
 * 
 *@Title: 继承--案例二
 *@Deseription: GrassAnimal测试类
 *@author 萝茗
 *@date 2021年8月13日
 *@version 1.0
 *
 */
public class TestGrassAnimal {
	public static void main(String[] args) {
//		1.创建一个兔子对象
		Rabbit r=new Rabbit("兔子");
		r.eatDrass(); //兔子吃草...
		
//		2.创建一个羊对象
		Sheep s=new Sheep("羊");
		s.eatDrass(); //羊吃草...
	}
}
