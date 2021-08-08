package pro06;
/**
 * 
 * @Title: User测试类TestUser
 * @Deseription:
 * @author 萝茗
 * @date 2021年8月8日
 * @version 1.0
 *
 */
public class TestUser {

	public static void main(String[] args) {
//		1.创建一个User对象并初始化
		User u = new User();
		System.out.println(u.age);//10
		User u1 = new User("admin", "123456", true, 23, "2021-08-08");//// admin123456true232021-08-08 有参构造方法被调用了！
		u1.login();//// admin 正在登陆！
	}

}
