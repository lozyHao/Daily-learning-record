package ManagementSystem;

import java.util.Scanner;

public class HotelSystem {

	public static void main(String[] args) {
		// 1.模拟窗口
		while (true) {
			// 3.打印菜单
			System.out.println("【1】添加房间【2】修改房间状态【3】修改房间类型【4】查询房间信息【-1】退出系统");
			// 4.从控制台获取一个数字
			int menu = getInt();
			// 2.模拟关闭按钮
			if (menu == -1) {
				System.out.println("退出系统");
				break;
			}
			// 5.校验
			boolean isCheck = check(menu);
			if (!isCheck) {
				// 校验失败
				System.out.println("校验失败、请重新输入");
				continue;
			}
			// 校验通过
			process(menu);
		}

	}

	static HotelManager manager = new HotelManager();

	private static void process(int menu) {
		if (menu == 1) {
//			添加房间信息
			System.out.println("请输入房间编号 0101-1689：");
			int id = getInt();
			System.out.println("请输入房间类型 单人房0 标准房1 商务房2 总统套房3：");
			int type = getInt();
			System.out.println("请输入房间状态 空闲0 已入住1 维修2：");
			int state = getInt();
			Room room = new Room(id, type, state);
			boolean isAdd=manager.add(room);
			if(isAdd) {
				System.out.println("添加成功！");
			}else {
				System.out.println("添加失败！");
			}
		} else if (menu == 2) {
//			修改房间状态
			System.out.println("请输入房间编号：");
			int id = getInt();
			System.out.println("请输入房间状态 空闲0 已入住1 维修2：");
			int state = getInt();
			boolean isState=manager.modifyRoomState(id, state);
			if(isState) {
				System.out.println("修改成功！");
			}else {
				System.out.println("修改失败！");
			}
		} else if (menu == 3) {
//			修改房间类型
			System.out.println("请输入房间编号：");
			int id = getInt();
			System.out.println("请输入房间类型 单人房0 标准房1 商务房2 总统套房3：");
			int type = getInt();
			boolean isType=manager.modifyRoomType(id, type);
			if(isType) {
				System.out.println("修改成功！");
			}else {
				System.out.println("修改失败！");
			}
		} else if (menu == 4) {
//			查询房间信息
			System.out.println("请输入房间编号：");
			int id = getInt();
			Room room=manager.getRoomById(id);
			System.out.println("房间编号："+room.id);
			System.out.println("房间类型："+HotelManager.ROOM_TYPE[room.type]);
			System.out.println("房间状态："+HotelManager.ROOM_STATE[room.state]);
			System.out.println("房间价格："+HotelManager.ROOM_PRICES[room.type]+" 元");
		}

	}

	private static boolean check(int menu) {
		if (menu >= 1 && menu <= 4) {
			return true;
		}
		return false;
	}

	private static int getInt() {
		Scanner sc = new Scanner(System.in);
		return sc.nextInt();
	}

}
