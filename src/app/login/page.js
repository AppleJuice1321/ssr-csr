"use client";

import { loginUser } from "@/actions/login";
import Input from "@/components/input";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
// import { z } from "zod"

// const userSchema = z.object({
//   username: z.string().email({ message: "Invalid Email address"}).min(1, { message: "You must provide an Email address"}),
//   password: z.string().min(4)
// })

export default function Login() {
  const [formState, formAction] = useFormState(loginUser);

  useEffect(
    function () {
      // EN TOAST HVOR EN BESKED VISES NÅR FORMULAREN ER BLEVET SENT MED SUCCE
      if (!formState?.success) {
        // Toastens besked
        // toast.success("Form was successfully submitted");
        // HUSK - OPTIONAL CHAINING altså: ?
        toast.error(formState?._errors[0])
      }

      if(formState?.redirect) {
        redirect(formState.redirect)
      }
    },
    [formState]
  );

  // async function loginUser(formData) {
  //   "use server"

  //   const username = formData.get("username")
  //   const password = formData.get("password")

  //   const validated = userSchema.safeParse({ username, password})

  //   console.log(validated)
  //   if (!validated.success) {
  //     console.log(validated.error.format())
  //   }

  //   return validated
  // }
  return (
    // action giver besked på at dataen samles via async functionen ovenover
    // Hvis action fjernes så kan en users' information ses i URL'en - det skal det ikke
    // Med action forhindres dette og der er heller ikke nogne page reloads
    <form
      className="w-dvw mx-auto px-4 sm:w-1/2 md:w-1/2"
      action={formAction}
      noValidate
    >
      <h2 className="text-2xl text-white">Log in</h2>
      {/* Input felterne */}
      {/* ._errors laver en liste af alle fejlbeskeder man har i login, dette kan ændres alt efter hvilken index i arrayet man henter ned */}
      <Input
        label="Username"
        name="username"
        type="text"
        statusMessage={formState?.username?._errors[0]}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        statusMessage={formState?.password?._errors[0]}
      />
      {/* Checkbox */}
      <div className="flex justify-between whitespace-nowrap text-xs">
        <label className="flex gap-1 text-white">
          <input type="checkbox" />
          Remember me
        </label>
        {/* Reset / get prev password */}
        <Link href="/recover-password" className="underline text-white">
          I forgot my password
        </Link>
      </div>
      {/* Submit btn */}
      <button
        type="submit"
        className="bg-orange-500 px-4 py-2 mt-6 rounded-sm w-full text-white"
      >
        Log in
      </button>
      {/* Create account */}
      <p className="text-center mt-5 text-white">
        Don't have an account?{" "}
        <Link href="/register" className="underline">
          Get a free one, here
        </Link>
      </p>
    </form>
  );
}
