# CRUD实用程序

# Session从导入sqlalchemy.orm，这将允许您声明db参数的类型，并在函数中进行更好的类型检查和完成。
from sqlalchemy.orm import Session
# 导入models（SQLAlchemy模型）和schemas（Pydantic模型/模式）。
import models, schemas

# 通过ID和电子邮件读取单个用户
def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

# 读取多个用户
def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

# 建立资料
#   现在创建实用程序函数来创建数据。
    # 使用您的数据创建一个SQLAlchemy模型实例。
    # add 该实例对象到您的数据库会话。
    # commit 对数据库的更改（以便将其保存）。
    # refresh 您的实例（以便它包含数据库中的任何新数据，例如生成的ID）。
def create_user(db: Session, user: schemas.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(email=user.email, hashed_password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# 阅读多个项目
def get_items(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Item).offset(skip).limit(limit).all()

# 建立资料
#   现在创建实用程序函数来创建数据。
    # 使用您的数据创建一个SQLAlchemy模型实例。
    # add 该实例对象到您的数据库会话。
    # commit 对数据库的更改（以便将其保存）。
    # refresh 您的实例（以便它包含数据库中的任何新数据，例如生成的ID）。
def create_user_item(db: Session, item: schemas.ItemCreate, user_id: int):
    db_item = models.Item(**item.dict(), owner_id=user_id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
