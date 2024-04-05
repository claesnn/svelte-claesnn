import type { PageLoad } from "./$types"

interface BlogModule {
  path: string
  default: ConstructorOfATypedSvelteComponent
  metadata: Record<string, string>
}

export const load: PageLoad = () => {
  const modules = import.meta.glob<BlogModule>("$lib/blogs/*.md", {
    eager: true,
  })

  const posts = Object.keys(modules).map((path) => {
    const post = (path.split("/").pop() ?? "").replace(/\.md$/, "")
    const { metadata } = modules[path]
    return { post, metadata }
  })

  return { posts }
}
