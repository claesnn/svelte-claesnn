<script lang="ts">
  import PageHead from "$lib/components/PageHead.svelte"
  import IndexGame from "./IndexGame.svelte"
  import IndexIntro from "./IndexIntro.svelte"
  import IndexPhotos from "./IndexPhotos.svelte"
</script>

<PageHead />

<IndexIntro />

<hr class="mt-10 mb-5" />
<a href="/photography">
  <h1 class="font-[Kurale] text-4xl mb-4">Photography</h1>
</a>
<IndexPhotos />

<hr class="mt-10 mb-5" />
<a href="/software">
  <h1 class="font-[Kurale] text-4xl mb-4">Software</h1>
</a>
<IndexGame />

<hr class="mt-10 mb-5" />
<a href="/about">
  <h1 class="font-[Kurale] text-4xl mb-4">Biotech</h1>
</a>

<div class="max-w-4xl mx-auto">
  <a href="https://doi.org/10.1038/srep18016">
    <img
      src="/papers/0.png"
      alt="Biotech"
      loading="lazy"
    />
  </a>
</div>
