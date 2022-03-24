const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// 取别名
// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         'assets': "@/assets",
//         'components': "@/components",
//         'network': "@/network",
//         'utils': "@/utils",
//         'views': "@/views"
//       }
//     }
//   }
// }
