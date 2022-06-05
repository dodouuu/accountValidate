// 引用 Express
const express = require('express')

// 引用 Express 路由器
const router = express.Router()

// 引用 Schema
const accountValidate = require('../../models/accountValidate')

// 定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

// 按下 Sign in
router.post('/', (req, res) => {
  accountValidate.find({
    $and: [
      { email: req.body.email },
      { password: req.body.password }
    ]
  })
    .lean()
    .then(user => {
      // console.log('email=', req.body.email)
      // console.log('pass=', req.body.password)
      // console.log('user=', user)
      // console.log('user.len=', user.length)
      if (user.length === 0) { // 沒有找到 user
        console.log('not found')
        const needAlert = true
        res.render('index', { needAlert })
      } else {
        console.log('found')
        res.render('welcome', { user: user[0] })
      }
    })
})

module.exports = router