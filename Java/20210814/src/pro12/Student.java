package pro12;

public class Student extends Person{
	private double score;
	
	public Student() {
		
	}

	public Student(String name, int age, boolean gender, double score) {
		super(name, age, gender);
		this.score = score;
	}

	public void say() {
		System.out.println("此次考试得分："+score);
	}
	
	public void eat(int no) {
		System.out.println("今天吃点了 "+no+" 碗饭");
	}
	
	public double getScore() {
		return score;
	}

	public void setScore(double score) {
		this.score = score;
	}
	
}
