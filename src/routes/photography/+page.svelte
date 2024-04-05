<script>
  const IMAGE_COUNT = 54
</script>

<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
  {#each [...Array(IMAGE_COUNT)] as _, i}
    <a href={`/photography/${i}`}>
      <img
        src={`/images/${i}-640.webp?enhanced`}
        alt=""
      />
    </a>
  {/each}
</div>
