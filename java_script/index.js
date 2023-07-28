//需要下载
const express = require('express')
//需要创建router.js文件
const router = require('./router')
//需要安装
const bodyParser = require('body-parser')
//引用 用于发送命令行命令
const child_process = require('child_process')
//创建一个服务器
const app = express()
//设置需要使用模板
app.engine('html', require('express-art-template'))
//设置模板目录
app.set('views', 'pages')
//托管静态资源
app.use('/assets', express.static('assets'))
//给req.body赋值
app.use(bodyParser.urlencoded())
//处理路由
app.use(router)
//接收发送来的post请求
app.post('/change', function(req, res) {
//调用python脚本 同理于在命令行运行python脚本
//调用语句：python test.py 在后面拼接参数向脚本中传参
  var workerProcess = child_process.exec(
    `python test.py ${req.body.name} ${req.body.age}`,
    function(error, stdout, stderr) {
      if (error) {
        console.log(error.stack)
        console.log('Error code: ' + error.code)
        console.log('Signal received: ' + error.signal)
      }
      console.log('stdout: ' + stdout)
      // console.log('stderr: ' + stderr)
    }
  )
  workerProcess.on('exit', function(code) {
    // console.log('exit code ' + code)
  })
  //打印接收到的data数据
  console.log(req.body)
  res.json(req.body)
})

// 启动服务器
app.listen(8888, () => console.log('http://localhost:8888 server start'))
