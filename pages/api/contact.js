import { MongoClient } from "mongodb";
import { connectToDatabase } from "../../lib/mongodb-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      console.log("invalid input");
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const { client, db } = await connectToDatabase();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "sotring message failed" });
    }

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }

  if (req.method === "GET") {
    const { db } = await connectToDatabase();

    const messages = await db.collection("messages").find({});

    res.json(messages);
  }
}

export default handler;
