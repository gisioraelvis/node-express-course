const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const PORT = 8000;


app.use(bodyParser.json())

const mockUsersData = [{ name: "Elvis" }, { name: "Oay" }];

app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "User retrival success",
    users: mockUsersData,
  });
});

app.get('/users/:id',(req,res)=>{
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.post('/login', (req,res)=>{
const userName = req.params.userName
const password = req.params.password

const mockUserName = 'Elithedev',
const mockPassword = 'supersecret'

if (userName === mockUserName && password === mockPassword){
  res.json({
    success: true,
    message: 'Login Successful',
    token: 'token goes here'
  })
}else{
  res.json({
    success: false,
    message: 'username or password doesnt match'
  })
}
})

app.listen(PORT, () => {
  console.log(`server running on localhost:${PORT}`);
});
