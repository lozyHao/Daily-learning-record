# 罗志豪
# 学习时间:2021/5/619:34


# 运算符
# 1 算术运算符
# 包括 + - * / % ** //
print(1 + 2)
print(2 - 1)
print(2 * 1)
print(8 / 5)  # 除法运算
print(8 % 5)  # 取模运算
print(2 ** 3)  # 幂运算
print(11 // 2)  # 整除

# 2.赋值运算符
i = 3 + 4
print(i)
a = b = c = 20
print(a, b, c)
a = 20
a += 30
print("a的值为：", a)
b = 5
b *= 6
print("b的值为：", b)
c = 20
c /= 2
print("c的值为：", c)
print("------解包赋值------")
a, b, c = 1, 2, 3
print(a, b, c)
print("------交换两个变量的值------")
a, b = 10, 20
print("交换之前的值：", a, b)
a, b = b, a
print("交换之后的值：", a, b)

# 0507补充

# 3.比较运算符
print(3 == 5)
print(3 != 5)
print(3 < 5)
print(3 > 5)
print(3 <= 5)
print(3 >= 5)

# 4.逻辑运算符
print(1 and 2)
# 2
print(1 or 2)
# 1
print(not(True))
# False
print(not(False))
# True
