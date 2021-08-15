package School;

public class TestSchool {

	public static void main(String[] args) {
////		1.创建多个学生对象
//		Student[] stus= {new Student(),new Student(),new Student(),new Student()};
////		2.创建多个老师对象
//		Teacher[] teas= {new Teacher(),new Teacher(),new Teacher(),new Teacher()};
////		3.创建一个学校对象
//		School sc=new School(stus, teas);
		
		Person[] per= {new Student(),new Teacher(),new Student(),new Teacher(),new Student(),new Teacher()};
		School sc=new School(per);
	}

}
