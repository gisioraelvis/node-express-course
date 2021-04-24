const express = require("express");
const app = express();
const PORT = 8000;

const mockUsersData = [{ name: "Elvis" }, { name: "Oay" }];

app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "User retrival success",
    users: mockUsersData,
  });
});

app.listen(PORT, () => {
  console.log(`server running on localhost:${PORT}`);
});
