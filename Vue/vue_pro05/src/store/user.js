// 用户模块
const user = {
    namespaced: true, //命名空间 用于区分，使用时加上名字  user/ （如：user/descrption）
    state: () => ({
        name: '小明',
        age: 22,
        gender: '男'
    }),
    mutations: { //方法
        setUsername: function (state) {
            state.name = "大明"
        },
        // setAge: function (state) {
        //     state.age = 40
        // },
        setAge: function (state, value) {
            state.age = value //传递参数
        }
    },
    actions: {
        asyncSetName: function (context) {
            context.commit('setUsername')
        },
        // asyncSetAge: function (context) {
        //     setTimeout(() => {
        //         context.commit('setAge')
        //     }, 1000)
        // },
        asyncSetAge: function (context) {
            setTimeout(() => {
                context.commit('setAge', 60) //传递参数
            }, 1000)
        }
    },
    getters: {
        descrption: function (state, getters, rootState) {
            return state.name + " 年龄是：" + state.age + " 岁！"
        }
    }
}

export default user;