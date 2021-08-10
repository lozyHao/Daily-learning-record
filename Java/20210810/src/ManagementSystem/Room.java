package ManagementSystem;

public class Room {
//	1.房间编号：1080 1081 1082 1083 1085 1086 1087 1088 1089
	int id;
//	2.房间类型 单人房0 标准房1 商务房2 总统套房3
	int type;
//	3.房间状态 空闲0 已入住1 维修2
	int state;

//	表示房间类型
	static int ROOM_TYPE_SINGLE = 0;
	static int ROOM_TYPE_STANDARD = 1;
	static int ROOM_TYPE_BUSSINESS = 2;
	static int ROOM_TYPE_PERSIDENT = 3;
//	表示房间状态
	static int ROOM_STATE_FREE = 0;
	static int ROOM_STATE_IN = 1;
	static int ROOM_STATE_REPAIRED = 2;

	public Room() {

	}

	public Room(int i, int t, int s) {
		id = i;
		type = t;
		state = s;
	}

}
