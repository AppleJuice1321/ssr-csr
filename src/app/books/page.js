"use client";

import BookForm from "@/components/bookform";
import { useEffect, useState } from "react";
import { getBooks } from "@/actions/books";
import { useFormState } from "react-dom";
import { createBook, deleteBook } from "@/actions/books";
import Confirm from "@/components/confirm";
// import { connect, disconnect } from "@/lib/db";
// import mongoose from "mongoose";
// import Book from "@/models/books"

// DETTE HER ER ET: READ
// async function getBooks() {
//   "use server"
//   // Tager fat i databasen som så skal bruges herinde for at display det på ens hjemmeside
//   // OPRETTER FORBINDELSE TIL DATABASEN
//   await connect();
//   // Finder alle bøger fra databasen, fordi var har en database der indeholder bøger (selvvalgt :> )
//   // Altså den kikker efter ordet: books i db kollektionen
//   // HENTER DATAENE VI SKAL BRUGE
//   // under "find({})" - skrives et specifict object ind, fx en specifik bog man vil se
//   const books = await Book.find()
//   //   const books = await mongoose.connection.db.collection("books").find({}).toArray() - hvis man ikke har en /src/models/books.js fil system
//   // "find({}) - findOne({}) - findById({})" - findById er kompliceret

//   // Nyt object af samme navn
//   // const newBook = new Book({
//   //   title: "Kadavermarch",
//   //   author: "Dennis Jürgensen"
//   // })

//   // Gemmer den nye oprettede bogdata til den eksisterende database
//   // await newBook.save()

//   // LUKKER FOR FORBINDELSEN (MAN HAR DET MAN SKULLE BRUGE) - DETTE GØRES VÆRE GANG MAN HENTER NOGET
//   await disconnect();

//   return books
// }

export default async function Books() {
  // Gemmer resultatet (bøgerne) i en variable
  // const books = await getBooks()
  // Logger en liste over givne bøger
  // console.log(books);

  const [books, setBooks] = useState([]);
  const [formState, formAction] = useFormState(createBook);

  async function deleteHandler(event) {
    if (confirm("dqjdqjdqjdqqdqd")) {
      console.log(event.target.dataset.id);
      // returnerer et promis
      deleteBook(event.target.dataset.id);
      // Opdater liste af bøger
      setBooks(await getBooks());
    }
  }

  useEffect(
    function () {
      getBooks().then((books) => setBooks(books));
    },
    [formState]
  );

  return (
    // Viser bøgernes titler og author på siden
    <div className="text-white">
      <h1 className="text-3xl">Books</h1>
      <Confirm/>
      <BookForm formAction={formAction} formState={formState} />
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button
              data-id={book._id}
              onClick={deleteHandler}
              className="bg-pink-500 py-2 px-3 rounded-3xl"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
