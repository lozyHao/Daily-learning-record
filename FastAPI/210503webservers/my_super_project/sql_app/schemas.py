# 创建初始的Pydantic模型/模式


from typing import List, Optional
from pydantic import BaseModel

# 创建一个ItemBase和UserBasePydantic模型（或称“方案”）以在创建或读取数据时具有共同的属性。
class ItemBase(BaseModel):
    title: str
    description: Optional[str] = None

# 创建一个ItemCreate和并UserCreate从它们继承（这样它们将具有相同的属性），以及创建所需的所有其他数据（属性）。
class ItemCreate(ItemBase):
    pass

# 创建Pydantic模型/模式以进行读取/返回
#   现在创建Pydantic模型（方案），该模型在从API返回数据时读取数据时将使用。
#   例如，在创建项目之前，我们不知道分配给它的ID是什么，但是在读取它（从API返回）时，我们已经知道它的ID。
class Item(ItemBase):
    id: int
    owner_id: int
    # 使用Pydantic的 orm_mode
    #     现在，在Pydantic模型中阅读Item和User添加一个内部Config类。
    #     此类Config用于为Pydantic提供配置。
    #     在Config该类中，设置属性orm_mode = True。
    class Config:
        orm_mode = True

class UserBase(BaseModel):
    email: str

class UserCreate(UserBase):
    password: str

# 同样，在读取用户时，我们现在可以声明items将包含属于该用户的项目。
# 不仅是这些商品的ID，还包括我们在Pydantic模型中定义的用于读取商品的所有数据：Item。
class User(UserBase):
    id: int
    is_active: bool
    items: List[Item] = []
    class Config:
        orm_mode = True
