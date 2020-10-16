const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use("/static", express.static(path.join(__dirname,"public")))
app.set("views", path.join(__dirname,"views"))
app.set('view engine', 'hbs')

app.get("/", (req, res) => {
  res.render('home')
})

app.listen(port, (err) => {
  console.log(`Example app listening at http://localhost:${port}`)
})

