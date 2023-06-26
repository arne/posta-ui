<script lang="ts">
  import { Label, Input } from '$lib/forms';
  import { enhance } from '$app/forms';
  import { Button } from '$lib/button';

  export let form;
</script>

<svelte:head>
  <title>Posta.no: Login</title>
</svelte:head>

<div class="max-w-sm mb-12 border rounded-md">
  <form method="POST" use:enhance>
    <div class="p-2 flex flex-col gap-3">
      <Label class="space-y-2">
        <span>User/Email</span>
        <Input
          type="text"
          name="username_or_email"
          placeholder="User/Email"
          value={form?.email ?? ''}
        />
      </Label>
      <Label class="space-y-2">
        <span>Password</span>
        <Input type="password" name="password" placeholder="Password" />
        {#if form?.missing}<p class="error">The email field is required</p>{/if}
        {#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
      </Label>
    </div>

    <Button>Login</Button>
    <div class="p-2 border-t" />
  </form>
</div>

<hr class="my-5" />
