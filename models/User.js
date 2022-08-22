const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000

// register에서 사용되는 user에 대한 값을 여기서 인스턴스화 한다.
const User 

//mongodb 접속
mongoose.connect

// root 페이지 라우팅
app.get('/', (req, res) => res.send('메인 페이지')
        


app.post('/register', (req, res) => {
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면 그것을 DB로 넣어준다.
  const user = new User(req.body)
  
    user.save((err, userInfo) => {
      if (err) return res.json
  
      
      
app.listen(port, () => console.log(`web server open at ${port}!`)
