const express = require("express");
const path = require("path");

const app = express();

// Note: copy the build folder generated by create-react-app inside the client folder

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Handles any requests that don't match the ones above (Solve react router errors)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("App is listening on port " + port));
