<script lang="ts">
  import type { PageData } from "./$types"
  export let data: PageData
</script>

{#if data.status}
  <p>Blog post not found</p>
{:else}
  {#if data.props?.Component}
    <svelte:component this={data.props.Component} />
  {/if}
  {data.props?.metadata.title}
{/if}
