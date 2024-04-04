<script>
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<h1
  class="font-[Kurale] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-10 text-center"
>
  Hi, I'm Claes Nymand Nilsson
</h1>
<div class="max-w-3xl mx-auto mt-4">
  <div class="flex">
    <img
      src="/profile-pic-200.webp"
      width="80"
      height="80"
      alt="Claes Nymand Nilsson"
      class="h-20 w-20 rounded-[4rem] mr-4"
    />
    <p class="">
      I am Danish biotech scientist with a thousand side-hobbies. I have a
      passion for <a href="/photography"><u>photography</u></a>,
      <a href="/software"><u>coding</u></a>, biotech and sports, amongst other
      things. I share my thoughts on those hobbies and the world at large
      through my <a href="/blog"><u>blog</u></a>. Come follow along, when I dig
      into photo composition, python package management, javascript
      framework-wars and coffee tricks with diminishing returns.
    </p>
  </div>
  <div class="flex min-w-full justify-center mt-4">
    <a href="/blog">
      <Button class="align-center px-8 py-4">Straight to the blog!</Button>
    </a>
  </div>
</div>
