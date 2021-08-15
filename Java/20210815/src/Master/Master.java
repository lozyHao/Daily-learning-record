package Master;

public class Master {
//	1.给小狗和小猫喂食物
//	1.1 该种方法代码耦合度比较大，当增加、修改、删除一个类，此处方法也随之修改，不太好。
//	public void feed(Cat cat) {
//		cat.eat();
//	}
//	public void feed(Dog dog) {
//		dog.eat();
//	}
//	1.2 该种方法优化了上面代码，将父类Pet定义为变量，再将各宠物传入即可（子类对象就是父类对象）。
//		Pet父类 --> Cat Dog Tiger对象 (引用多态)
//		***一：此时pet作为形式参数***
	public void feed(Pet pet) {
//		动态绑定
		pet.eat();
	}
}
