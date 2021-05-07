# 罗志豪
# 学习时间:2021/5/618:10

#!/usr/bin/python3

# 文件操作：
# 1.使用
# 打开一个文件
f = open("/tmp/foo.txt", "w")
f.write( "Python 是一个非常好的语言。\n是的，的确非常好!!\n" )
# 关闭打开的文件
f.close()

# 2 f.write()
# 打开一个文件
f = open("/tmp/foo.txt", "r")
str = f.read()
print(str)
# 关闭打开的文件
f.close()

# 3 f.readline()
# 打开一个文件
f = open("/tmp/foo.txt", "r")
str = f.readline()
print(str)
# 关闭打开的文件
f.close()

# 4 f.readlines()
# 打开一个文件
f = open("/tmp/foo.txt", "r")
str = f.readlines()
print(str)
# 关闭打开的文件
f.close()

# 5 f.write()
# 打开一个文件
f = open("/tmp/foo.txt", "w")
num = f.write( "Python 是一个非常好的语言。\n是的，的确非常好!!\n" )
print(num)
# 关闭打开的文件
f.close()

f = open('/tmp/foo.txt', 'rb+')
f.write(b'0123456789abcdef')
#输出： 16
f.seek(5)     # 移动到文件的第六个字节
#输出： 5
f.read(1)
#输出： b'5'
f.seek(-3, 2) # 移动到文件的倒数第三字节
#输出： 13
f.read(1)
#输出： b'd'


f.close()
f.read()
# Traceback (most recent call last):
# File "<stdin>", line 1, in ?
# ValueError: I/O operation on closed file
