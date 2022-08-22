const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser');
const port = 5000

// register에서 사용되는 user에 대한 값을 여기서 인스턴스화 한다.
const User = require('./models/User');

//mongodb 접속
mongoose.connect

//application/x-www-form-urlencoded 형태 파싱
app.use(bodyParser.urlencoded({extended: true}));

//application/json 형태 파싱
app.use(bodyParser.json());

// root 페이지 라우팅
app.get('/', (req, res) => res.send('메인 페이지')
        
       
        


app.post('/register', (req, res) => {
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면 그것을 DB로 넣어준다.
        
        
  // 클라이언트가 입력한 user req값을 파싱하여 user인스턴스에 담는다.
  const user = new User(req.body)
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err})  // 실패시 err 메시지를 전송함.
    return res.status(200).json({
        success: true
    })
  })
})
          
  
      
      
app.listen(port, () => console.log(`web server open at ${port}!`)
