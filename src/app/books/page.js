import { connect, disconnect } from "@/lib/db";
import mongoose from "mongoose";

async function getBooks() {
  // Tager fat i databasen som så skal bruges herinde for at display det på ens hjemmeside
  connect();
  // Finder alle bøger fra databasen, fordi var har en database der indeholder bøger (selvvalgt :> )
  // Altså den kikker efter ordet: books i db kollektionen
  const books = await mongoose.Collection("books").find();

  disconnect();

  return books
}


export default async function Books() {
    console.log(await getBooks());
  return (
    <>
      <h1 className="text-3xl">Books</h1>
    </>
  );
}
