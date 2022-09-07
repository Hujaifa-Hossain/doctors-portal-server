import express from "express";
// import MongoDB from "mongodb";
import cors from "cors";
import "dotenv/config";
import { MongoClient, ServerApiVersion } from "mongodb";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// app.get('/', (req, res) => {
//   res.send('hello!')
// })

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cx98a0k.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object

  app.get('/', (req, res) => {
    res.send('hello')
  })
  client.close();
});

app.listen(PORT, () => {
  console.log(PORT)
})
