<script lang="ts">
  import type { CommentView } from 'lemmy-js-client';
  import SingleComment from './SingleComment.svelte';
  type Lookup = { [key: string]: CommentView };
  type TreeItem = {
    id: string;
    children: TreeItem[];
  };
  import SvelteMarkdown from 'svelte-markdown';
  export let tree: TreeItem[];
  export let lookup: Lookup;
  export let indent = 0;
</script>

<ul>
  {#each tree as branch}
    <li style={`margin-left: ${indent * 10}px;`} class="mb-4">
      <SingleComment comment={lookup[branch.id]} />
      {#if branch.children.length > 0}
        <svelte:self tree={branch.children} {lookup} indent={indent + 1} />
      {/if}
    </li>
  {/each}
</ul>
