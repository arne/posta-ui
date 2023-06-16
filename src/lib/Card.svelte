<script lang="ts">
  export let title: string | undefined;
</script>

<div class=" border border-gray-200 rounded-md p-2 prose">
  {#if title}<div class="text-xl font-bold">{title}</div>{/if}
  <slot />
</div>
