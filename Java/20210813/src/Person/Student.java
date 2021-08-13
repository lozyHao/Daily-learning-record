package Person;
/**
 * 
 *@Title: 继承--案例一
 *@Deseription: Student类-继承Person类
 *@author 萝茗
 *@date 2021年8月13日
 *@version 1.0
 *
 */
public class Student extends Person{
	private double score; //分数
	public Student(){
		
	}
	public Student(String name, boolean gender, int age,double score) {
		this.name=name;
		this.gender=gender;
		this.age=age;
		this.score = score;
	}
	public void study() {
		System.out.println(this.name+" 正在学习....");
	}
	public void exam() {
		System.out.println(this.name+" 考试分数为："+score+" 分");
	}
}
