package Person;
/**
 * 
 *@Title: 继承--案例一
 *@Deseription: TestPerson测试类
 *@author 萝茗
 *@date 2021年8月13日
 *@version 1.0
 *
 */
public class TestPerson {
	public static void main(String[] args) {
//		1.创建一个学生对象
		Student stu=new Student("张小明",true,12,90);
		stu.say(); //张小明说：早上好！
		stu.move(); //张小明正在行走....
		stu.study(); //张小明 正在学习....
		
//		2.创建一个教师对象
		Teacher tea=new Teacher("萝茗",true,35,2000);
		tea.say(); //萝茗说：早上好！
		tea.teaching(); //萝茗正在授课...
		tea.assignHomework(); //萝茗正在布置作业...
	}
}
