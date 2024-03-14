import Link from "next/link";
import "./globals.css";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <nav className="bg-orange-500 flex p-4 gap-4 mb-4">
          {/* Casher begge sider og fjerner ubrugelig extra fetching */}
          <Link href="/">Home</Link>
          <Link href="posts">Posts</Link>
          <Link href="users">Users</Link>
          <Link href="login">Log in</Link>
        </nav>
        {children}
        {/* Toast message */}
        {/* Kan også tilføje properties for at ændre lidt på styling og position incl. animation */}
        <ToastContainer
          draggable
          pauseOnHover
          autoClose={false}
        />
      </body>
    </html>
  );
}
