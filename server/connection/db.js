import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const Connection = async (username, password) => {
  try {
    const URL = `mongodb://${username}:${password}@ac-prcplqk-shard-00-00.uc4wcge.mongodb.net:27017,ac-prcplqk-shard-00-01.uc4wcge.mongodb.net:27017,ac-prcplqk-shard-00-02.uc4wcge.mongodb.net:27017/INSHORTS-CLONE-MERN?ssl=true&replicaSet=atlas-hoz0eu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    await mongoose.connect(URL, { useNewUrlParser: true });

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
