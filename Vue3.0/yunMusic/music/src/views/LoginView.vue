<template>
  <div class="login">
    <img class="backImg" src="../../public/imgs/1.jpg" alt="" />
    <div class="go">
      <table>
        <tr>
          <td><span class="iconfont icon-shouji"></span></td>
          <td>
            <input type="number" placeholder="请输入手机号" v-model="phone" />
          </td>
        </tr>
        <tr>
          <td><span class="iconfont icon-mima"></span></td>
          <td>
            <input
              type="password"
              placeholder="请输入密码"
              v-model="password"
            />
          </td>
        </tr>
      </table>
      <div class="btn" @click="loginEnter">登 录</div>
      <div class="other">
        <span>注册</span>
        <span>忘记密码?</span>
      </div>
      <div class="loginType">
        <span class="typeTitle">—— 其他登录方式 ——</span>
        <div class="types">
          <span class="iconfont icon-shouji"></span>
          <span class="iconfont icon-youxiang"></span>
          <span class="iconfont icon-xiazai42"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    loginEnter: async function () {
      let res = await this.$store.dispatch("loginPhone", {
        phone: this.phone,
        password: this.password,
      });
      if (res.data.code == 200) {
        this.$router.push("/meview");
        alert("登录成功");
      } else {
        alert("密码和手机号不匹配，登录失败");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  padding: 0.01rem;
  z-index: 999;
  .backImg {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 11;
  }
  .go {
    position: relative;
    width: 70%;
    height: 3rem;
    margin: 0 auto;
    margin-top: 6rem;
    z-index: 12;
    table {
      width: 100%;
      height: 2rem;
      tr {
        padding: 0.1rem;
        align-items: center;
        td:first-of-type {
          text-align: right;
          width: 10%;
          span {
            font-size: 0.4rem;
            color: white;
          }
        }
        td:last-of-type {
          text-align: left;
          width: 90%;
          input {
            display: inline-block;
            margin-left: 0.2rem;
            width: 95%;
            height: 0.5rem;
            border: none;
            border-bottom: 0.03rem solid white;
            outline: none;
            background: none;
            color: white;
            letter-spacing: 0.03rem;
            padding-left: 0.1rem;
          }
          ::-webkit-input-placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
          ::-moz-placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
          :-moz-placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
          :-ms-input-placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
    }
    .btn {
      width: 100%;
      height: 0.7rem;
      margin: 0.2rem auto;
      font-size: 0.4rem;
      font-weight: bolder;
      letter-spacing: 0.03rem;
      text-align: center;
      background: white;
      line-height: 0.7rem;
      color: red;
      border-radius: 0.3rem;
    }
    .other {
      width: 100%;
      height: 0.5rem;
      display: flex;
      align-items: center;
      span {
        width: 50%;
        color: rgba(255, 255, 255, 0.6);
      }
      span:last-of-type {
        text-align: right;
      }
    }
    .loginType {
      width: 100%;
      margin-top: 0.5rem;
      text-align: center;
      align-items: 0.5rem;
      .typeTitle {
        display: inline-block;
        height: 0.5rem;
        color: white;
      }
      .types {
        width: 100%;
        height: 0.8rem;
        margin-top: 0.2rem;
        span {
          font-size: 0.5rem;
          color: white;
          display: inline-block;
          margin: 0 0.2rem;
        }
      }
    }
  }
}
</style>