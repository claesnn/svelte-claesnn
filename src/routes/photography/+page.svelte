<script lang="ts">
  import PageHead from "$lib/components/PageHead.svelte"
  import { imageMeta } from "$lib/imageMeta"
  const IMAGE_COUNT = 54
</script>

<PageHead
  title="Photography"
  description="A collection of photos taken by Claes Nymand Nilsson"
/>

<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
  {#each [...Array(IMAGE_COUNT)] as _, i}
    <a href={`/photography/${i}`}>
      <img
        src={`/images/${i}-640.webp`}
        alt="hobby"
        width={imageMeta[i].width}
        height={imageMeta[i].height}
        loading={i < 9 ? "eager" : "lazy"}
      />
    </a>
  {/each}
</div>
