const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use("/static", express.static(path.join(__dirname,"public")))
app.set("views", path.join(__dirname,"views"))
app.set('view engine', 'hbs')

app.get("/", (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

