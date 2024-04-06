<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte"
  import * as Select from "$lib/components/ui/select"
  import { ArrowDown, ArrowUp } from "svelte-radix"
  import type { PageData } from "./$types"
  import PageHead from "$lib/components/PageHead.svelte"
  export let data: PageData

  let posts = data.posts
  let selected = {
    label: "",
    value: "",
  }
  let ascending = false

  // Sort posts by date
  $: sortPosts(ascending)

  // Filter posts by category
  $: selected.value
    ? (posts = data.posts.filter(
        (post) => post.metadata.category === selected.value,
      ))
    : (posts = data.posts)

  function resetSelected() {
    selected = { label: "", value: "" }
  }

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

<PageHead
  title="Blog"
  description="Read about photography, web development, coffee, sports and more"
/>

<div class="md:flex mt-5">
  <!-- Display all posts -->
  <ul class="space-y-8 mb-10 md:flex-grow">
    {#each posts as post}
      <li>
        <a href={`/blog/${post.post}`}>
          <!-- Post metadata -->
          <p>
            <span class="text-blue-700 text-sm mr-2">
              {post.metadata.category.toUpperCase()}
            </span>
            <span class="text-sm">
              {formatDate(post.metadata.date).toUpperCase()}
            </span>
          </p>

          <!-- Post title and description -->
          <h1 class="font-[Kurale] text-4xl mb-3">{post.metadata.title}</h1>
          <p>{post.metadata.description}</p>
        </a>
      </li>
    {/each}
  </ul>

  <!-- Filter and sort controls -->
  <div class="md:w-[200px] flex-shrink-0">
    <h2 class="text-slate-600 tracking-wide font-bold mb-3 text-sm">FILTERS</h2>
    <!-- Sort posts -->
    <Button
      class="w-full mb-5"
      variant="outline"
      on:click={() => (ascending = !ascending)}
    >
      <span class="mr-1">Sort by date</span>
      {#if ascending}
        <ArrowUp size="16" />
      {:else}
        <ArrowDown size="16" />
      {/if}
    </Button>

    <!-- Filter posts -->
    <Select.Root bind:selected>
      <Select.Trigger class="w-full">
        <Select.Value placeholder="Category" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="javascript">Javascript</Select.Item>
        <Select.Item value="python">Python</Select.Item>
      </Select.Content>
    </Select.Root>

    <!-- Clear category filter -->
    {#if selected.value}
      <Button
        class="mt-4 w-full"
        variant="secondary"
        on:click={resetSelected}
      >
        Clear filter
      </Button>
    {/if}
  </div>
</div>
