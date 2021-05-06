# 罗志豪
# 学习时间:2021/5/416:47

# 2.转义字符
# 2.1转义字符使用
print('hello\nworld')  # \n-->换行
print('hello\tworld')  # \t-->制表位空格（每一个\t占四个制表位，从左到右依次计算）
print('helloooo\tworld')
print('hello\rworld')  # \r-->覆盖前面的内容
print('hello\bworld')  # \b-->退格（后面内容会覆盖掉转义字符前面第一位）
print('http:\\www.baidu.com')  # \\-->路径转义

# 2.2原字符，不希望字符串中的转义字符起作用，就是用原字符，就是在字符串前面加上r，或R
print(r'hello\nworld')
