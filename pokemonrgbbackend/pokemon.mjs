import env from "dotenv";
env.config();
import { MongoClient, ServerApiVersion } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const getCollection = async () => {
  try {
    await client.connect();
    const db = client.db("pokemons");
    return db.collection("pokemon");
  } catch {
    client.close();
  }
};
const getAllPokemon = async () => {
  const col = await getCollection();
  const cursor = col.find();
  const result = await cursor.toArray();
  console.log(result);

  client.close();
};
getAllPokemon();
