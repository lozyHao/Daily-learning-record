package School;
/**
 * 
 *@Title: 多态的应用--属性 (学校和老师、学生之间的关系)
 *@Deseription: 继承关系、子类重写父类方法、使用父类引用指向子类的对象
 *@author 萝茗
 *@date 2021年8月15日
 *@version 1.0
 *
 */
public class School {
////	多个同学
//	Student[] stus;
////	多个老师
//	Teacher[] teas;
//
//	public School(Student[] stus, Teacher[] teas) {
//		this.stus = stus;
//		this.teas = teas;
//	}
	
//	父类的引用-->Student Teacher ...
	Person[] per;
	public School(Person[] per) {
		this.per=per;
	}
}
