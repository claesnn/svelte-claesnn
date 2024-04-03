<script lang="ts">
  import IndexGame from "$lib/components/IndexGame.svelte";
  import Button from "$lib/components/ui/button/button.svelte";

  type Photo = {
    id: number;
    width: number;
    height: number;
    alt: string;
  };

  const photos: Photo[] = [
    {
      id: 24,
      width: 1280,
      height: 853,
      alt: "A photo of a rock in the ocean in Iceland",
    },
    {
      id: 45,
      width: 1280,
      height: 853,
      alt: "A photo of a road with flowers on each side leading to a mountain in Iceland",
    },
    {
      id: 2,
      width: 1280,
      height: 1920,
      alt: "A photo of the adventure tower in south zealand",
    },
    {
      id: 7,
      width: 1280,
      height: 1920,
      alt: "A photo of the Geysir in Iceland",
    },
    {
      id: 38,
      width: 1280,
      height: 853,
      alt: "A photo of waterfalls in Iceland",
    },
    {
      id: 41,
      width: 1280,
      height: 853,
      alt: "A photo of the oldest church in Iceland with hayballs on the field",
    },
  ];
</script>

<!--INTRO-->
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

<hr class="mt-10 mb-5" />

<!--PHOTOGRAPHY-->
<a href="/photography">
  <h1 class="font-[Kurale] text-4xl mb-4">Photography</h1>
</a>
<div class="grid sm:grid-cols-2 gap-3">
  {#each photos as photo, index}
    <a href={`/photography/${photo.id}`}>
      <img
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading={index < 2 ? "eager" : "lazy"}
        srcSet={`/images/${photo.id}-200.webp 200w, /images/${photo.id}-420.webp 420w, /images/${photo.id}-420.webp 640w, /images/${photo.id}-640.webp 960w,/images/${photo.id}-640.webp 1280w`}
      />
    </a>
  {/each}
</div>
<div class="flex justify-center mt-3">
  <a href="/photography">
    <Button variant="ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-more-horizontal"
      >
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    </Button>
  </a>
</div>

<hr class="mt-5 mb-5" />
<a href="/software">
  <h1 class="font-[Kurale] text-4xl mb-4">Software</h1>
</a>

<IndexGame />
