# 主FastAPI应用


from typing import List
from . import crud,models,schemas
# from crud import get_user,get_user_by_email,get_users,create_user,get_items,create_user_item
# from models import User,Item
# from schemas import ItemBase,ItemCreate,Item,User, UserBase,UserCreate
from fastapi import FastAPI, Depends,Response,status,Query,Body, HTTPException  #导入FastAPI
from .database import get_session,SessionLocal, engine
from sqlalchemy.orm import Session
from sqlalchemy.orm.exc import NoResultFound

app = FastAPI()  #创建一个app实例

@app.post("/users/", response_model=schemas.User)
async def create_user(user: schemas.UserCreate, db: Session = Depends(get_session)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@app.get("/users/", response_model=List[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_session)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users

@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_session)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@app.post("/users/{user_id}/items/", response_model=schemas.Item)
def create_item_for_user(
    user_id: int, item: schemas.ItemCreate, db: Session = Depends(get_session)
):
    return crud.create_user_item(db=db, item=item, user_id=user_id)

@app.get("/items/", response_model=List[schemas.Item])
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_session)):
    items = crud.get_items(db, skip=skip, limit=limit)
    return items


# RESTful接口设计规范中
#   1．面向资源(URI->url )
#   2．每一个资源都具有GET/POST/PUT/DELETE 四个标准的动作（请求方法)
#   3．每个资源动作都是无状态的（HTTP协议的短连接，即不保存客户端和服务端的连接通道)
#   4．(C或B/S客户端和服务端）交互的数据格式都使用json(content-type: application/json)

# @app.get("/one")  #编写一个路径操作装饰器
# async def root():  #编写一个路径操作函数
#     # 业务处理
#     # 处理结果
#     return {"你好！": "朋友。"}
# @app.get("/two/{two_id}") #带参传值
# async def read_item(item_id: int, q: Optional[str] = None):
#     return {"item_id": item_id, "q": q}
# # 基于BaseModel定义请求体的结构（JSON对象）
# # 1.手机号验证登录
# class LonginUser(BaseModel):
#     phone:str
#     code:str
# # 手机号验证登录接口
# @app.post('/login')
# def user_login_byPhone(user:LonginUser):
#     #查询phone是否存在
#     #验证code是否有效
#     return{'msg':'用户已登录','phone':user.phone}
# # 2.账号密码登录
# class UsernameAndPassword(BaseModel):
#     userName:str #必填
#     passWord:str #必填
#     is_save:bool=False #可选项
# #账号密码登录接口
# @app.post('/login2')
# def user_login_byUserName(user:UsernameAndPassword):
#     return{'msg':f'用户登录失败{user.userName}用户不存在！'}
# # 3.用户注册
# # 账号密码接口
# @app.get('/login3')
# async def user_login_get(name: str = Query(...,min_length=8,max_length=20,regex=r'^[a-zA-Z]'),
#                          pwd: str = Query(...,min_length=6,max_length=20)):
#     return {'msg': '正在开发','user':{
#     'name': name,
#     'auth_string': hashlib.sha1(pwd.encode('utf8')).hexdigest()
#     }
#     }

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app='main:app', host="127.0.0.1", port=8000, reload=True, debug=True)
