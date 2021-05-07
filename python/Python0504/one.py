# 罗志豪
# 学习时间:2021/5/415:35

# 1.输出
# 1.1输出数字：
print(45)
print(4.5)
# 1.2输出字符串
print('Hello World1')
print("hello World2")
print('1+2+3')
# 1.3输出含有运算符的表达式
print(3 + 5 * 5)
print(5 / 2)
# 1.4将数据输出到文件中
fp = open('D:/桌面/text.txt', 'a+')  # 文件打开路径/内容写入方式
print('Hello World', file=fp)  # 输出内容/打开文件
fp.close()  # 关闭文件
# 1.5不换行输出
print('Hello', 'World', 'Python')
x = "a"
y = "b"
print(x, end=" ")
print(y)

