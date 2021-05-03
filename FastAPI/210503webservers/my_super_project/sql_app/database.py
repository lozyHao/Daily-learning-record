# 创建SQLAlchemy部分


# 1.导入SQLAlchemy零件
from sqlalchemy import create_engine  # sqlalchemy连接数据库
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# 2.为SQLAlchemy创建数据库URL
#   数据库路径
SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"

# 3.创建SQLAlchemy engine
#   第一步是创建一个SQLAlchemy“引擎”。
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# 4.建立SessionLocal课程
#   SessionLocal该类的每个实例将是一个数据库会话。该类本身还不是数据库会话。
#   但是，一旦我们创建了SessionLocal该类的实例，该实例将成为实际的数据库会话。
#   我们SessionLocal将其命名为有别于Session我们从SQLAlchemy导入的名称。
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 5.建立Base课程
#   使用declarative_base()返回一个类的函数
Base = declarative_base()

# 创建一个依赖
def get_session():
    db = SessionLocal()
    db.execute('pragma foreign_keys=on')
    try:
        yield db
    finally:
        db.close()
