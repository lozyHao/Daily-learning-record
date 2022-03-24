<template>
  <div class="register">
    <nav-bar>
      <template v-slot:default>新用户注册</template>
    </nav-bar>
    <div class="go">
      <h3>萝茗书库</h3>
      <van-form class="goForm" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="name"
            name="name"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
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
          <van-field
            v-model="password_confirmation"
            type="password"
            name="password_confirmation"
            label="确认密码"
            placeholder="确认密码"
            :rules="[{ required: true, message: '请确认密码' }]"
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

import { register } from "@/network/user";

import { reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();

    // 表单中v-modle双向绑定数据的
    const userInfo = reactive({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
    const onSubmit = (values) => {
      var pattern =
        /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
      // 先验证
      if (values.password != values.password_confirmation) {
        Notify("两次密码不一致...");
      }
      if (
        values.password == values.password_confirmation &&
        values.password.length != values.password_confirmation.length
      ) {
        Notify("密码最少为六位...");
      }
      if (pattern.test(values.email) == false) {
        Notify("不是合法邮箱...");
      } else if (
        values.password == values.password_confirmation &&
        pattern.test(values.email) == true
      ) {
        // 再提交
        register(values).then((res) => {
          console.log(res);
          if (res.status == 201) {
            Toast.success("注册成功！");
            setTimeout(() => {
              router.push({ path: "/login" });
            }, 1000);
          }
        });
      }
    };

    return {
      ...toRefs(userInfo),
      onSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
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