import mongoose from "mongoose";



const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-wqd8d7m-shard-00-00.oummbn0.mongodb.net:27017,ac-wqd8d7m-shard-00-01.oummbn0.mongodb.net:27017,ac-wqd8d7m-shard-00-02.oummbn0.mongodb.net:27017/crud-app?ssl=true&replicaSet=atlas-9f4ve2-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL,{ useUnifiedTopology : true, useNewUrlParser : true });
        
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with database',error);
    }
}

export default Connection;