<script lang="ts">
  import { enhance } from '$app/forms';
  import { langDetector } from 'eld';
  import { CommentView } from '../../client';

  export let comment: CommentView;
  $: content = 'Type something here';
  $: detected = false as Boolean | string;
  function checkLanguage() {
    langDetector.scores = true;
    detected = langDetector.detect(content).language;
  }
</script>

<form action={`/p/${comment.post.id}?/comment`} method="POST" use:enhance>
  <textarea
    class="w-full p-1 border rounded"
    bind:value={content}
    on:change={() => checkLanguage()}
  />
  <p>Detected language: {detected}</p>
  <button>Submit</button>
</form>
