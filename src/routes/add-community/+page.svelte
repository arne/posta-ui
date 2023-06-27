<script lang="ts">
  import { enhance } from '$app/forms';
  import { Button } from '$lib/button';
</script>

<h1>Add community</h1>

<form action="/add-community?/search" method="POST" use:enhance>
  <input class="border rounded p-2" type="text" name="search" />
  <Button type="submit">Find community</Button>
</form>
