package pro10;
/**
 * 
 *@Title: 多重关联
 *@Deseription: TestPaper测试类
 *@author 萝茗
 *@date 2021年8月12日
 *@version 1.0
 *
 */
public class TestPaper {
	public static void main(String[] args) {
//		3.创建单选题对象
		SingleChoice s1=new SingleChoice("1+1=?","A.1","B.2","C.3","D.4");
		SingleChoice s2=new SingleChoice("1+2=?","A.1","B.2","C.3","D.4");
		SingleChoice s3=new SingleChoice("3+1=?","A.1","B.2","C.3","D.4");
//		2.创建一个单选题数组
		SingleChoice[] singles= {s1,s2,s3};
//		1.创建一张试卷
		Paper p=new Paper(singles);
	}
}
