export default function BlogPage() {
  return (
    <>
      <h2>i am a blog file renderring from the /blog</h2>
       <main className="min-h-screen bg-zinc-950 text-white">
  <div className="mx-auto max-w-5xl px-6 py-16">
    {/* Page Heading */}
    <div className="mb-12 text-center">
      <h1 className="text-5xl font-bold">
        Blog
      </h1>

      <p className="mt-4 text-lg text-zinc-400">
        Welcome to the blog page. This page is created to practice routing
        in Next.js using the App Router.
      </p>
    </div>

    {/* Demo Blog Cards */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((post) => (
        <div
          key={post}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg transition hover:border-blue-500 hover:shadow-xl"
        >
          <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm font-medium text-blue-400">
            Next.js
          </span>

          <h2 className="mt-4 text-2xl font-semibold text-white">
            Blog Post {post}
          </h2>

          <p className="mt-3 text-zinc-400">
            This is a sample blog description for learning the Next.js App
            Router and creating routes using folders.
          </p>

          <button className="mt-6 rounded-lg bg-white px-5 py-2 font-medium text-black transition hover:bg-zinc-200">
            Read More
          </button>
        </div>
      ))}
    </div>
  </div>
</main>
    </>
  );
}
