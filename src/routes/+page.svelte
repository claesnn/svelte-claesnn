<script lang="ts">
  import IndexGame from "./IndexGame.svelte";
  import IndexIntro from "./IndexIntro.svelte";
  import IndexPhotos from "./IndexPhotos.svelte";
</script>

<IndexIntro />

<hr class="mt-10 mb-5" />
<a href="/photography">
  <h1 class="font-[Kurale] text-4xl mb-4">Photography</h1>
</a>
<IndexPhotos />

<hr class="mt-5 mb-5" />
<a href="/software">
  <h1 class="font-[Kurale] text-4xl mb-4">Software</h1>
</a>
<IndexGame />
