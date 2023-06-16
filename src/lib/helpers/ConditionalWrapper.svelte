<script lang="ts">
  export let link = true;
</script>

{#if link}
  <a href={$$restProps.href} {...$$restProps}><slot /></a>
{:else}
  <slot />
{/if}
