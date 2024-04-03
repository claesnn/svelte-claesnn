<script>
  import "../app.pcss"
  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
</script>

<div class="min-h-screen">
  <Header />
  <div class="p-5 max-w-7xl mx-auto">
    <slot />
  </div>
</div>
<Footer />
