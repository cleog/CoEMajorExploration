const express = require('express');
const app = express();
app.use(express.json());

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://coe_admin:CoE123%232023!@cs46x.l19wpnk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const database = client.db('CoE');

const PORT = process.env.PORT || 8008;

app.listen(PORT, () => {
  console.log("Server listening on Port", PORT);
});

let conn;
try {
  conn = client.connect();
} catch(e) {
  console.error(e);
}
let Questions = database.collection('Questions')

// Get all questions
app.get('/questions', async (request, response) => {
  let result = await Questions.find({}).toArray();
  if (!result) response.sendStatus(404);
  else response.send(result).status(200);
});

// Post Function
// Create a question using this endpoint
// Use a question string and weight in request body to update the DB 
app.post('/create/question', async (request, response) => {
  if (request.body) {
    const body = request.body;
    const question = body.question;
    const weight = body.weight;
    const query = {
      question, 
      weight
    };
    await Questions.insertOne(query);
    response.send('Created Question').status(200);
  } else {
    response.sendStatus(404);
  }
});