import mongoose from "mongoose"

// Begge functioner skal være async!
// CONNECT FUNKTION
export async function connect() {
    // tager fat i .env.local filen og connecter til databasen
    // env = envirenment
    return await mongoose.connect(process.env.MONGO_URI)
}

// DISCONNECT FUNKTION
export async function disconnect() {
    return await mongoose.disconnect()
}