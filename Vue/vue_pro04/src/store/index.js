// 全局状态配置文件
// 导入响应式 reactive
import { reactive } from "vue";

// 状态管理仓库
const store = {
    state: reactive({
        message: "helloworld",
        duanziList: []
    }),
    setMessage(value) {
        this.state.message = value;
    },
    setDzList(list) {
        this.state.duanziList = list;
    }
};

export default store;