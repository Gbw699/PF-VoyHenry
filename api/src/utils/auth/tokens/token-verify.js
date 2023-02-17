const jwt = require('jsonwebtoken')

const secret = 'myCat';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInNjb3BlIjoiY2xpZW50IiwiaWF0IjoxNjc2NjQ3NzY1fQ.GETUbRFuMlPpmxaLV-GMDohjvYkl4jyGQnMWM3MrghM"

const verifyToken = (payload, secret) => {
  return jwt.verify(payload, secret)
}

const payload = verifyToken(token, secret)

console.log(payload)
