"use server";

import { z } from "zod";

// ET SKEMA MED MINIMUMS KRAV - EVT. FEJLBESKEDER
const userSchema = z.object({
  // Username og Password skal valideres
  // man kan tilføje hvor lang inputet må være med min(Number in here)
  username: z
    .string()
    .email({ message: "Invalid Email address" })
    .min(1, { message: "You must provide an Email address" }),
  password: z
    .string()
    .min(4, { message: "Must be at least 4 characters long" }),
});

// VALIDERER FORMULRENS GYLDIGHED
// Server side funktion - clienten kan heller ikke se denne funktion
// Validerings kontrol af inputet
export async function loginUser(prevState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const validated = userSchema.safeParse({ username, password, title, author });

  // HVIS FORMULAREN IKKE ER UDFYLDT KORREKT - VISE FEJLENE TIL BRUGEREN
  console.log(validated);
  if (!validated.success) {
    return validated.error.format();
  }

  // Teste hvis en a inputs ikke er korrekte
  if (username !== "deez@nuts.com" || password !== "1234") {
    // Formatet vises ligesom i zod async functionen loginUser (samme skema)
    return { success: false, _error: ["Incorrect username or password"] }
  }

  // her vil vi redirectes hvis formularen var en succe
  return { redirect: "/dashboard"}
  // tager fat i det felt hvor vi gerne vil gemme dataene.
  // console.log(formData.get("username"))
  // console.log(formData.get("password"))
  // Checkboxen giver datatypen NULL hvis den ikke tjekket og ON hvis den er tjekket
  // console.log(formData.get("remember"))

  // !!! Hvis input felterne er tomme og der submittes, så er det tom strings den viser.
}
