<script>
  import { page } from "$app/stores"
  import PageHead from "$lib/components/PageHead.svelte"
  const photo = `/images/${$page.params.id}-1280.webp`
</script>

<PageHead
  title={`Photo - ${$page.params.id}`}
  description="A collection of photos taken by Claes Nymand Nilsson"
/>

<div class="flex justify-center">
  <img
    src={photo}
    class="max-h-screen"
  />
</div>
