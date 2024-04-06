<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte"

  type Photo = {
    id: number
    width: number
    height: number
    alt: string
  }

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
  ]
</script>

<!--Photo grid-->
<div class="grid sm:grid-cols-2 gap-3">
  {#each photos as photo, index}
    <a href={`/photography/${photo.id}`}>
      <img
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading={index < 2 ? "eager" : "lazy"}
        srcSet={`/images/${photo.id}-200.webp 200w, /images/${photo.id}-420.webp 420w, /images/${photo.id}-640.webp 640w, /images/${photo.id}-640.webp 960w,/images/${photo.id}-640.webp 1280w`}
      />
    </a>
  {/each}
</div>

<!--More button-->
<div class="flex justify-center mt-3">
  <a href="/photography">
    <Button
      variant="ghost"
      aria-label="More photos"
    >
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
        <circle
          cx="12"
          cy="12"
          r="1"
        />
        <circle
          cx="19"
          cy="12"
          r="1"
        />
        <circle
          cx="5"
          cy="12"
          r="1"
        />
      </svg>
    </Button>
  </a>
</div>
