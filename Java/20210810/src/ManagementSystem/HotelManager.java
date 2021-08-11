package ManagementSystem;

import java.util.ArrayList;

//	房间编号 1080 1081 1082 1083 1085 1086 1087 1088 1089 
// 		   1180 1181 1182 1183 1185 1186 1187 1188 1189
//	 	   1280 1281 1282 1283 1285 1286 1287 1288 1289
//		   1380 1381 1382 1383 1385 1386 1387 1388 1389
//	10楼、11楼 单人房
//	12楼、13楼 标准房
//	0 6 9 商务房
//	8 总统套房

public class HotelManager {
//	1.属性多个房间
	ArrayList<Room> rooms;
//	2.体现价格 房间类型 单人房0 标准房1 商务房2 总统套房3
	static int[] ROOM_PRICES = { 188, 388, 688, 1088 };
//	3.房间类型
	static String[] ROOM_TYPE = { "单人房", "标准房", "商务房", "总统套房" };
//	4.房间状态
	static String[] ROOM_STATE = { "空闲", "已入住", "正在维修" };

	public HotelManager() {
//		1.初始化
		init();
	}

//	初始化
	public void init() {
		System.out.println("\n\t\t\t<=== 酒 店 房 间 管 理 系 统 ===>");
//		a 创建集合
		rooms = new ArrayList<>();
//		b 创建房间对象
		for (int i = 0; i <= 300; i += 100) {
			for (int index = 1080 + i; index <= 1089 + i; index++) {
				if (index % 10 == 4) {
					continue;
				}
//				判断单人房和标准房
				if (index / 100 == 10 || index / 100 == 11) {
					Room room = new Room(index, Room.ROOM_TYPE_SINGLE, Room.ROOM_STATE_FREE);
					rooms.add(room);
				} else if (index / 100 == 12 || index / 100 == 13) {
					Room room = new Room(index, Room.ROOM_TYPE_STANDARD, Room.ROOM_STATE_FREE);
					rooms.add(room);
				}
			}
		}
//		c 遍历集合
		for (Room room : rooms) {
			int id = room.id;
			if (id % 10 == 0 || id % 10 == 6 || id % 10 == 9) {
				room.type = Room.ROOM_TYPE_BUSSINESS; // 确定为商务房
			} else if (id % 10 == 8) {
				room.type = Room.ROOM_TYPE_PERSIDENT; // 确定为总统套房
			}
		}

//		for (Room room : rooms) {
//			System.out.println("房间编号：" + room.id + " , 房间类型" + room.type + "/" + HotelManager.ROOM_TYPE[room.type]
//					+ " , 房间状态" + room.state + "/" + HotelManager.ROOM_STATE[room.state]);
//		}
	}

//	添加房间
	public boolean add(Room room) {
//		1.判断房间编号是否重复
		for (Room rm : rooms) {
			if (room.id == rm.id) {
				return false;
			}
		}
//		2.添加元素
		rooms.add(room);
		return true;
	}

//	修改房间状态
	public boolean modifyRoomState(int id, int state) {
//		1.获取集合中是否存在该房间
		Room room = null;
		for (Room rm : rooms) {
			if (id == rm.id) {
				room = rm;
				break;
			}
		}
//		2.修改房间状态
		if (room != null) {
			room.state = state;
			return true;
		}
		return false;
	}

//	修改房间类型
	public boolean modifyRoomType(int id, int type) {
//		1.获取集合中是否存在该房间
		Room room = null;
		for (Room rm : rooms) {
			if (id == rm.id) {
				room = rm;
				break;
			}
		}
//		2.修改房间类型
		if (room != null) {
			room.type = type;
			return true;
		}
		return false;
	}

//	查询房间信息
	public Room getRoomById(int id) {
		for (Room rm : rooms) {
			if (id == rm.id) {
				return rm;
			}
		}
		return null;
	}

//	订房

//	查询所有的空闲房间
	public ArrayList<Room> queryByAllFree() {
//		2.创建一个集合保存空闲房间对象
		ArrayList<Room> freeRooms = new ArrayList<>();
//		1.遍历集合
		for (Room room : rooms) {
			if (room.state == Room.ROOM_STATE_FREE) {
				freeRooms.add(room);
			}
		}
		return freeRooms;
	}

//	订房间-->已入住
	public boolean book(int id) {
		for (Room room : rooms) {
			if (room.id == id) {
				room.state = Room.ROOM_STATE_IN;
				return true;
			}
		}
		return false;
	}

//	退房
	public boolean out(int id) {
		for (Room room : rooms) {
			if (room.id == id) {
				room.state = Room.ROOM_STATE_FREE;
				return true;
			} else {
				return false;
			}
		}
		return false;
	}

//	换房
	public boolean change(int srcId, int desId) {
//		1.退房间
		boolean isOut = out(srcId);
//		2.订房间
		boolean isBook = book(desId);
//		3.判断
		return isOut && isBook;
	}

//	入住率
	public double inRate() {
//		1.总房间数
		int all = rooms.size();
//		2.入住房间数
		int sum = 0;
		for (Room room : rooms) {
			if (room.state == Room.ROOM_STATE_IN) {
				sum++;
			}
		}
//		3.返回入住率
		return sum * 1.0 / all;
	}

//	空闲率
	public double freeRate() {
//		1.总房间数
		int all = rooms.size();
//		2.空闲房间数
		int sum = 0;
		for (Room room : rooms) {
			if (room.state == Room.ROOM_STATE_FREE) {
				sum++;
			}
		}
//		3.返回入住率
		return sum * 1.0 / all;
	}

//	统计营业额
	public double total() {
		double moneys = 0.0;
		for (Room room : rooms) {
			if (room.state == Room.ROOM_STATE_IN) {
				moneys += HotelManager.ROOM_PRICES[room.type];
			}
		}
		return moneys;
	}

}
