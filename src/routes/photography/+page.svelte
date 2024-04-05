<script lang="ts">
  const images = import.meta.glob<string>("$lib/images/*-1280.webp", {
    query: { enhanced: true },
    import: "default",
    eager: true,
  })
</script>

<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
  {#each Object.values(images) as image, i}
    <a href={`/photography/${i}`}>
      <enhanced:img
        src={image}
        alt="hobby"
        loading={i < 6 ? "eager" : "lazy"}
      />
    </a>
  {/each}
</div>
