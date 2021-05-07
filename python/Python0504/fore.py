# 罗志豪
# 学习时间:2021/5/417:00

# 变量
name = '罗志豪'
print('标识：', id(name))  # 内存地址
print('类型：', type(name))  # 数据类型
print('值1：', name)  # 值

name1 = '罗志豪01'
name2 = '罗志豪02'
name = name1
print('值2：', name)
name = name2
print('值3：', name)

# Python允许你同时为多个变量赋值。
a = b = c = 1
print(a, b, c)
# 您也可以为多个对象指定多个变量。例如：
a, b, c = 1, 2, "runoob"
print(a, b, c)

# 数据类型
# 1.数字number
a, b, c, d = 20, 5.5, True, 4 + 3j
print(type(a), type(b), type(c), type(d))

# 2. 字符串String
str = 'Runoob'
print(str)  # 输出字符串
print(str[0:-1])  # 输出第一个到倒数第二个的所有字符
print(str[0])  # 输出字符串第一个字符
print(str[2:5])  # 输出从第三个开始到第五个的字符
print(str[2:])  # 输出从第三个开始的后的所有字符
print(str * 2)  # 输出字符串两次，也可以写成 print (2 * str)
print(str + "TEST")  # 连接字符串

# Python 使用反斜杠 \ 转义特殊字符，如果你不想让反斜杠发生转义，可以在字符串前面添加一个 r，表示原始字符串：
print('Ru\noob')
print(r'Ru\noob')

# 3.列表
list = ['abcd', 786, 2.23, 'runoob', 70.2]
tinylist = [123, 'runoob']
print(list)  # 输出完整列表
print(list[0])  # 输出列表第一个元素
print(list[1:3])  # 从第二个开始输出到第三个元素
print(list[2:])  # 输出从第三个元素开始的所有元素
print(tinylist * 2)  # 输出两次列表
print(list + tinylist)  # 连接列表


a = [1, 2, 3, 4, 5, 6]
a[0] = 9
print(a)
a[2:5] = [13, 14, 15]
print(a)
a[2:5] = []   # 将对应的元素值设置为 []
print(a)

str = input("请输入：")
print("你输入的内容是: ", str)
