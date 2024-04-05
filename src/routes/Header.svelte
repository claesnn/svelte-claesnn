<script>
  import { onMount } from "svelte"
  import { page } from "$app/stores"
  import MenuClose from "$lib/components/svg/MenuClose.svelte"
  import MenuOpen from "$lib/components/svg/MenuOpen.svelte"

  const links = [
    {
      name: "Blog",
      route: "/blog",
    },
    {
      name: "Software",
      route: "/software",
    },
    {
      name: "Photography",
      route: "/photography",
    },
    {
      name: "About",
      route: "/about",
    },
  ]

  let menuOpen = false

  // disable scrolling when menu is open
  $: onMount(
    () => (document.body.style.overflow = menuOpen ? "hidden" : "auto"),
  )

  function toggleMenu() {
    menuOpen = !menuOpen
  }

  function closeMenu() {
    menuOpen = false
  }
</script>

<!--
  @component
  ## Header

  The header component is used to display the navigation links and the logo.
  
-->

<header
  class="flex justify-between px-3 py-2 place-items-center max-w-7xl mx-auto"
>
  <!-- LOGO -->
  <a
    href="/"
    on:click={closeMenu}
  >
    <h1 class="text-2xl font-bold font-[Oswald]">CLAESNN</h1>
  </a>

  <!-- BURGER -->
  <button
    on:click={toggleMenu}
    class="sm:hidden"
  >
    {#if menuOpen}
      <MenuClose />
    {:else}
      <MenuOpen />
    {/if}
  </button>

  <!-- NAV -->
  <nav class="hidden sm:flex space-x-4">
    {#each links as link}
      <a
        href={link.route}
        class="text-sm"
        class:active={$page.url.pathname === link.route}
        on:click={closeMenu}
      >
        {link.name}
      </a>
    {/each}
  </nav>
</header>

<!-- MOBILE NAV -->
{#if menuOpen}
  <nav class="w-full z-10 fixed top-[50px] flex">
    <!--CLICKABLE BACKGROUND-->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="bg-gray-900 h-screen flex-grow opacity-40"
      on:click={closeMenu}
    ></div>

    <!--MENU-->
    <aside class="w-[20rem] bg-white h-screen p-3 flex flex-col space-y-2">
      {#each links as link}
        <a
          href={link.route}
          on:click={closeMenu}
          class:active={$page.url.pathname === link.route}
        >
          <button class="text-lg">
            {link.name}
          </button>
        </a>
      {/each}
    </aside>
  </nav>
{/if}
<hr />

<style>
  .active {
    text-decoration: underline;
  }
</style>
