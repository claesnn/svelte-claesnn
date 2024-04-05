<script lang="ts">
  import "./markdown.css"
  import type { PageData } from "./$types"
  export let data: PageData

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
</script>

<!--Blog Header-->
<div class="text-center w-full mb-12 mt-8">
  <!--Category and description-->
  <p>
    <span class="text-blue-600 text-sm mr-2">
      {data.metadata.category.toUpperCase()}
    </span>{data.metadata.description}
  </p>

  <!--Title and date-->
  <h1 class="font-[Kurale] text-7xl mt-3 mb-6">{data.metadata.title}</h1>
  <p class="text-slate-600">{formatDate(data.metadata.date)}</p>
</div>

<!--Blog Content-->
<div class="markdown leading-relaxed max-w-4xl mx-auto">
  <svelte:component this={data.Component} />
</div>
