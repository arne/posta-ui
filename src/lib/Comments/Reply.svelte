<script lang="ts">
  import { langDetector } from 'eld';
  $: content = 'Type something here';
  $: detected = { language: 'unknown' };
  function checkLanguage() {
    langDetector.scores = true;
    detected = langDetector.detect(content);
  }
</script>

<form>
  <textarea
    class="w-full p-1 border rounded"
    bind:value={content}
    on:change={() => checkLanguage()}
  />
  <p>Detected language: {detected.language}</p>
  <button>Submit</button>
</form>
