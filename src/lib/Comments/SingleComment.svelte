<script lang="ts">
  import type { CommentView } from 'lemmy-js-client';

  export let comment: CommentView;
</script>

<div class="mb-4">
  <div><strong>by {comment.creator.name}</strong></div>
  {comment.comment.content}
</div>
