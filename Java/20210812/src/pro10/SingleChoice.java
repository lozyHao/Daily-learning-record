package pro10;
/**
 * 
 *@Title: 多重关联
 *@Deseription: SingleChoice类
 *@author 萝茗
 *@date 2021年8月12日
 *@version 1.0
 *
 */
public class SingleChoice {
	private String question;
	private String A;
	private String B;
	private String C;
	private String D;
	public SingleChoice(String question, String a, String b, String c, String d) {
		super();
		this.question = question;
		A = a;
		B = b;
		C = c;
		D = d;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getA() {
		return A;
	}
	public void setA(String a) {
		A = a;
	}
	public String getB() {
		return B;
	}
	public void setB(String b) {
		B = b;
	}
	public String getC() {
		return C;
	}
	public void setC(String c) {
		C = c;
	}
	public String getD() {
		return D;
	}
	public void setD(String d) {
		D = d;
	}
}
