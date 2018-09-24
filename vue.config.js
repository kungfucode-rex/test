const MyNoticePlugin = require('./MyNoticePlugin');
module.exports = {
  configureWebpack: {
    plugins: [
      new MyNoticePlugin()
    ]
  }
}