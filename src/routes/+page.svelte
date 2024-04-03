<script>
  import Button from "$lib/components/ui/button/button.svelte"
  import Input from "$lib/components/ui/input/input.svelte"

  let name = "world"

  function handleClick() {
    name += "!"
  }
</script>

<h1 class="text-5xl font-[Kurale]">Welcome to SvelteKit</h1>
<p class="mt-5">
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<div class="space-y-5 my-10">
  <h1 class="text-3xl font-[Kurale]">My awesome form</h1>
  <Input bind:value={name} />
  <Button on:click={handleClick}>Click me</Button>
  <p>Hello {name}!</p>
</div>
