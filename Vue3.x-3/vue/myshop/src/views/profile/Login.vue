<template>
  <div class="login">
    <nav-bar>
      <template v-slot:default>用户登录</template>
    </nav-bar>
    <div class="go">
      <h3>萝茗书库</h3>
      <van-form class="goForm" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="email"
            name="email"
            label="电子邮件"
            placeholder="电子邮件"
            :rules="[{ required: true, message: '请填写电子邮件' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/commen/navbar/NavBar.vue";

import { Notify, Toast } from "vant";

import { login } from "@/network/user";

import { reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";

import { useStore } from "vuex";
export default {
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const userInfo = reactive({
      email: "",
      password: "",
    });
    const onSubmit = (values) => {
      if (values.password.length >= 6) {
        login(values)
          .then((res) => {
            console.log(res);
            if (res != undefined) {
              // 将token保存在本地 window.localStorage
              window.localStorage.setItem("userToken", res.access_token);
              Toast.success("登录成功！");

              // 登陆成功，状态管理（设置登录状态为真）
              store.commit("setIsLogin", true);
              store.dispatch("updateCart");
              setTimeout(() => {
                router.push({ path: "/profile" });
              }, 1000);
            } else {
              Notify("账号和密码不匹配，登录失败...");
            }
          })
          .catch((err) => {
            console.log(err);
            Notify("账号和密码不匹配，登录失败...");
          });
      } else {
        Notify("密码至少为6位...");
      }
    };

    return {
      ...toRefs(userInfo),
      onSubmit,
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: #fff;
  position: relative;
  z-index: 20;
  .go {
    padding-top: 100px;
    h3 {
      font-size: 40px;
    }
    .goForm {
      margin-top: 100px;
    }
  }
}
</style>