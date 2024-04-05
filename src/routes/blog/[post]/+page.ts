import type { PageLoad } from "./$types"

interface BlogModule {
  default: ConstructorOfATypedSvelteComponent
  metadata: Record<string, string>
}

export const load: PageLoad = ({ params }) => {
  const post = `/src/lib/blogs/${params.post}.md`
  const modules = import.meta.glob<BlogModule>("$lib/blogs/*.md", {
    eager: true,
  })

  if (post in modules) {
    const { default: Component, metadata } = modules[post]
    return { props: { Component, metadata } }
  } else {
    return { status: 404 }
  }
}
