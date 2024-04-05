<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte"
  import * as Select from "$lib/components/ui/select"
  import type { PageData } from "./$types"
  export let data: PageData

  let posts = data.posts
  let selected = {
    label: "",
    value: "",
  }

  $: selected.value
    ? (posts = data.posts.filter(
        (post) => post.metadata.category === selected.value,
      ))
    : (posts = data.posts)

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  function sortPosts(ascending = false) {
    posts = posts.sort((a, b) => {
      const multiplier = ascending ? 1 : -1
      return (
        (new Date(a.metadata.date).getTime() -
          new Date(b.metadata.date).getTime()) *
        multiplier
      )
    })
  }
</script>

<h1 class="font-[Kurale] text-7xl mb-8 mt-2">Blogs</h1>

<!-- Display all posts -->
<ul class="space-y-8 mb-10">
  {#each posts as post}
    <li>
      <a href={`/blog/${post.post}`}>
        <!-- Post metadata -->
        <p>
          <span class="text-blue-700 text-sm mr-2"
            >{post.metadata.category.toUpperCase()}</span
          >
          <span class="text-sm"
            >{formatDate(post.metadata.date).toUpperCase()}</span
          >
        </p>

        <!-- Post title and description -->
        <h1 class="font-[Kurale] text-4xl mb-3">{post.metadata.title}</h1>
        <p>{post.metadata.description}</p>
      </a>
    </li>
  {/each}
</ul>

<!-- Sort posts -->
<Button on:click={() => sortPosts(true)}>Sort by date ascending</Button>
<Button on:click={() => sortPosts(false)}>Sort by date descending</Button>

<div class="mt-5"></div>

<!-- Filter posts -->
<Select.Root bind:selected>
  <Select.Trigger>
    <Select.Value placeholder="Category" />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="javascript">Javascript</Select.Item>
    <Select.Item value="python">Python</Select.Item>
  </Select.Content>
</Select.Root>

<!-- Clear category filter -->
<Button
  class="mt-4"
  on:click={() => (selected = { label: "", value: "" })}
>
  Clear filter
</Button>
