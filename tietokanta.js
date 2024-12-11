const { MongoClient } = require('mongodb');


const uri = "osoite";

// MongoDB client
const client = new MongoClient(uri);

async function connectToDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        return client.db("testdb"); // Replace 'testdb' with your database name
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the application on error
    }
}

module.exports = connectToDB;
