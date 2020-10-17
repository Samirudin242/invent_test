const express = require("express");
const app = express();
const routes = require("./router");
const PORT = 3000;

const cors = require("cors");

app.use(cors()); // yang menghubungkan localhost server dan client
app.use(express.urlencoded({ extented: true }));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
