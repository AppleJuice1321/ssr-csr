// "use client";

// import { useEffect, useState } from "react";

// server kommunikation bliver overført til den server man fetcher fra
// Der bliver sent en pre-renderede fil af data
async function getPosts() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  return data;
}

export default async function Posts() {
  const posts = await getPosts();
  // const [posts, setPosts] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //       setLoading(false);
  //     });
  // });

  // loading ? (
  //   <span>Loading...</span>
  // ) :
  return (
    <section className="text-white">
      {/* array over api data */}
      {posts.map((post) => (
        <article key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </article>
      ))}
    </section>
  );
}
