import blogPosts from '../data/blogPosts'

function BlogTeasers() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b18cff]">From the workbench</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#f5f2fa] sm:text-4xl">
            Repair Tips & Guides
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-3xl border border-[#3a2d56] bg-[#241a3d]/70 transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/40"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#12091f]/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#b18cff] backdrop-blur-sm">
                  {post.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#f5f2fa]">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#9c93b0]">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogTeasers
