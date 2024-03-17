"use client";

import { toast } from "react-toastify";
import Input from "./input";
import { useEffect, useRef } from "react";

// Dynamisk indhold = client sided

export default function BookForm({ formAction, formState }) {
  // denne state kommer fra react dom og ikke det andet der
  // Hvad skal aktion fra formen føre hen til
  // formAction er en placeholder for createBooks hvilket vi refererer til her

  const form = useRef(null);

  useEffect(
    function () {
      console.log("formState", formState);
      if (formState?.success) {
        toast.success("Book created");
        form.current?.reset();
      }
    },
    [formState]
  ); // dependency array (ellers kører submit ikke)

  return (
    // Formen skal haven action hvilket referer til mappen - action
    <form action={formAction} ref={form}>
      <label htmlFor="">
        Title
        <input type="text" name="title" />
      </label>
      <label htmlFor="">
        Author
        <input type="text" name="author" />
      </label>
      {/* <Input value="" label={Title} name={title} type={text} statusMessage={formState?.title?._errors[0]}/>
            <Input value="" label={Author} name={author} type={text} statusMessage={formState?.author?._errors[0]}/> */}
      <button type="submit">List title & author</button>
    </form>
  );
}
