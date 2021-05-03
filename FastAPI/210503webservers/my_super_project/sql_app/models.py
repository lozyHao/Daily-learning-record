# 创建数据库模型


# 1.创建模型属性/列
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String

# 表之间建立关系
from sqlalchemy.orm import relationship

# 2.从Base类创建SQLAlchemy模型
#   导入Base自database（database.py上面的文件）。
#   创建从其继承的类。
from database import Base


# 3.创建表
class User(Base):
    # 表名
    __tablename__ = "users"
    # 字段
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    items = relationship("Item", back_populates="owner")


class Item(Base):
    # 表名
    __tablename__ = "items"
    # 字段
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="items")