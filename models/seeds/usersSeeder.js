// 引用 Schema
const accountValidate = require('../../models/accountValidate')

const userList = require('../../users.json').users

const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('start usersSeeder')
  accountValidate.create(userList)
    .then(() => {
      console.log('usersSeeder create successfully!')
      db.close()
    })
    .catch(err => console.log(err))
})