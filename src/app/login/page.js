import Input from "@/components/input";
import Link from "next/link";

export default async function Login() {
  return (
    <form className="w-dvw mx-auto text-white px-4 md:w-1/2">
      <h2 className="text-2xl">Log in</h2>
      <Input label="Username" name="username" type="text" />
      <Input label="Password" name="password" type="password" />
      <div className="flex justify-between whitespace-nowrap text-xs">
        <label className="flex gap-1">
          <input type="checkbox" />
          Remember me
        </label>

        <Link href="/recover-password" className="underline">
          I forgot my password
        </Link>
      </div>
      <button
        type="submit"
        className="bg-orange-500 px-4 py-2 mt-6 rounded-sm w-full "
      >
        Log in
      </button>
      <p className="text-center mt-5">
        Don't have an account? <Link href="/register" className="underline">Get a free one, here</Link>
      </p>
    </form>
  );
}
