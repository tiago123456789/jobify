const app = require("./config/Server");

app.listen(process.env.PORT, () => console.log("Server is running address http://localhost:3000"));