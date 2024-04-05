<script>
  import "../app.pcss"
  import Footer from "./Footer.svelte"
  import Header from "./Header.svelte"
</script>

<div class="min-h-screen">
  <Header />
  <div class="p-3 max-w-7xl mx-auto">
    <slot />
  </div>
</div>
<Footer />
