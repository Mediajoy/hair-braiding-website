const { exec } = require('child_process');
const path = require("path")
const express = require("express")
const app = express()

app.use(express.static(path.join(__dirname, "public/")))
app.use(express.static(path.join(__dirname, "pages/")))

app.get("/", (req,res) => {
  exec('npx tailwindcss -i ./input.css -o ./public/out.css ', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }
});
  res.sendFile(path.join("__dirname", "pages/index.html"))
})

app.listen(5000, '0.0.0.0', () => {
  console.log("🚀 Shipping on port 5000")
})