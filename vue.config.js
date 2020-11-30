module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vueToDoList/' // vueToDoList 為 repo 名稱
    : './'
}
