// Import required packages
import express from "express";
import bodyParser from "body-parser";

// Initialize Express application
const app = express();

// Use middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add a Hello World route
app.get("/api", (req, res) => res.send("Hello World!"));

// Create a GET method to retrieve all users from the users table
app.get("/api/all", async (req, res) => {
  try {
    const response = await client.query("SELECT * FROM users");

    if (response) {
      res.status(200).send(response.rows);
    }
  } catch (error) {
    res.status(500).send("Error");
    console.log(error);
  }
});

// Create a POST method to insert users into the users table
app.post("/api/form", async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const response = await client.query(
      "INSERT INTO users(name, email, age) VALUES ($1, $2, $3)",
      [name, email, age]
    );

    if (response) {
      res.status(200).send(req.body);
    }
  } catch (error) {
    res.status(500).send("Error");
    console.log(error);
  }
});

// Add a port that will expose the API when the server is running
const PORT = 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}.`));
