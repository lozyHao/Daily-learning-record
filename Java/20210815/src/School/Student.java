package School;

public class Student extends Person{
//	重写Person父类中的方法
	public void say() {
		System.out.println("每日记单词！");
	}
	public void study() {
		System.out.println("开始听课，好好做作业！");
	}
}
