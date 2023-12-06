const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://coe_admin:" + process.env.MONGODB_KEY + "@cs46x.l19wpnk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('CoE');
    const Students = database.collection('Students');

    const query = { role: 'first year' };
    const firstyear = await Students.findOne(query);
    console.log(firstyear);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);