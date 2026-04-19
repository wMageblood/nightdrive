import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is running")
});

app.listen(process.env.PORT, () => {
  console.log("server running on port 3001")
})

app.get("/roster", (req, res) => {
  res.send("server is running /roster")
})