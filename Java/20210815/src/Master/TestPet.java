package Master;

public class TestPet {

	public static void main(String[] args) {
//		1.创建动物对象
		Dog dog=new Dog();
		Cat cat=new Cat();
		Tiger tiger=new Tiger();
		
//		2.创建管理员对象
		Master master=new Master();
//		dog、cat就是实参传入
		master.feed(dog); //狗喜欢吃骨头
		master.feed(cat); //猫喜欢吃鱼
		master.feed(tiger); //老虎喜欢吃肉
		
//		二：***局部变量***
		Pet pet=new Dog(); //此时pet指向Dog对象
		pet.eat(); //狗喜欢吃骨头
		
		pet=new Cat(); //此时pet指向Cat对象
		pet.eat(); //猫喜欢吃鱼
	}

}
