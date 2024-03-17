"use server";
// mongoose can i bruges i clienten dog kun server side

import { connect, disconnect } from "@/lib/db";
import Book from "@/models/books";
import { z } from "zod";

// Action er en ren html funktionalitet som er uafhængigt af js eller cs eller andet
// Submit er til gengæld en js ting som sørger for at action bliver udført
// Server action kan også fetches

const BookSchema = z.object({
  // min. krav for at submitte formen
  title: z.string().min(1, { message: "Title is required" }),
  author: z.string().min(1, { message: "Author is required" }),
});

// Denne action sker når der trykkes: submit
export async function createBook(prevState, formData) {
  const title = formData.get("title");
  const author = formData.get("author");

  // dataene skal gemmes i en variable
  const validated = BookSchema.safeParse({ title, author });

  console.log(validated);

  // Hvis min. kravene ikke er opfyldt, smid en error frem
  if (!validated.success) {
    // format() er en "zod" ting der gør errors læseligt for mennesker :)
    return validated.error.format();
  }

  // Gemme form input i databasen
  //   await connect();

  // For at fejlsikre kan dette prøves for at se at der er forbindelse til databasen
  try {
    await connect();
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Internal server error, Book was not created - try again.",
    };
  }

  // gemme en ny bog til databasen
  const book = new Book({
    title: title,
    author: author,
  });

  //   igen for at fejlsikre
  try {
    await book.save();
  } catch (error) {
    console.log(error);
    await disconnect();
    return {
      success: false,
      message: "Internal server error, Book was not created - try again.",
    };
  }

  //
  await disconnect();

  // enten: success: true eller: validated variablen
  return { success: true };
}
export async function getBooks() {
  "use server";

  await connect();

  const books = await Book.find();

  await disconnect();

  return books;
}

// function til at finde id'et af en bog man vil slette
export async function deleteBook(id) {
  await connect();

  await Book.findByIdAndDelete(id);

  await disconnect();
}
