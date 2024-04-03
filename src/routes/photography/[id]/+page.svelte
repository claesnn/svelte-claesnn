<script>
  import { page } from "$app/stores";
  const photo = `/images/${$page.params.id}-1280.webp`;
</script>

<div class="flex justify-center">
  <img src={photo} class="max-h-screen" />
</div>
