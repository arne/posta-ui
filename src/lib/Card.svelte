<script lang="ts">
  export let title: string | undefined;
</script>

<div class=" border rounded-md p-2 prose dark:prose-invert">
  {#if title}<div class="text-xl font-bold">{title}</div>{/if}
  <slot />
</div>
