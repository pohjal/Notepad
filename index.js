const { MongoClient } = require('mongodb');


const uri = "osoite";
// Create a MongoDB client
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        // Connect to the database
        await client.connect();
        console.log("Connected to MongoDB!");

        // Access a database (create if it doesn't exist)
        const db = client.db("Muistiinpanot");

        // Access a collection (create if it doesn't exist)
        const collection = db.collection("Muistiinpanot");

        // Insert a sample document (basic test)
        const result = await collection.insertOne({ name: "Olen Leevi ", value: 1 });
        console.log("Document inserted with ID:", result.insertedId);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        // Close the connection
        await client.close();
    }
}

connectToMongoDB();
