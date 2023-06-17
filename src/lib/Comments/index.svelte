<script lang="ts">
  import type { CommentView } from 'lemmy-js-client';
  import TreeShaker from './TreeShaker.svelte';
  type Lookup = { [key: string]: CommentView };
  export let comments: CommentView[];
  let lookup: Lookup = comments
    .map((c) => ({ [c.comment.path.split('.').slice(-1)[0]]: c }))
    .reduce((a, b) => ({ ...a, ...b }), {});
  let root: string[] = comments.map((c) => c.comment.path.split('.').slice(1).join('.'));

  type TreeItem = {
    id: string;
    children: TreeItem[];
  };

  const tree: TreeItem[] = [];
  const level: { result: TreeItem[] } = { result: tree };

  root.forEach((c: string) => {
    c.split('.').reduce((r: any, id: string, i: number, a: string[]) => {
      if (!r[id]) {
        r[id] = { result: [] };
        r.result.push({
          id,
          children: r[id].result,
        });
      }
      return r[id];
    }, level);
  });
</script>

<TreeShaker {tree} {lookup} />
