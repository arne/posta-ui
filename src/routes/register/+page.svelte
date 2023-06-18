<script lang="ts">
  import { Button } from '$lib/button';
  import { Label, Input, Textarea } from '$lib/forms';
  import { enhance } from '$app/forms';

  export let form;
  export let register;
  export let data;
</script>

<svelte:head>
  <title>Posta.no: Register</title>
</svelte:head>

<div class="max-w-sm mb-12 border rounded-md">
  <div class="p-2 flex flex-col gap-3">
    <form method="POST" action="?/register" use:enhance>
      <Label class="space-y-2">
        <span>Username</span>
        <Input type="text" name="username" placeholder="User" value={form?.email ?? ''} />
      </Label>
      <Label class="space-y-2">
        <span>Email</span>
        <Input type="text" name="email" placeholder="user@means.you" value={form?.email ?? ''} />
      </Label>
      <Label class="space-y-2">
        <span>Password</span>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={form?.password ?? ''}
        />
      </Label>
      <Label class="space-y-2">
        <span>Verify Password</span>
        <Input
          type="password"
          name="verify_password"
          placeholder="Password"
          value={form?.verify_password ?? ''}
        />
      </Label>
      <Label class="space-y-2">
        <span>Why Are You Signing Up?</span>
        <Textarea name="answer">{form?.answer ?? ''}</Textarea>
      </Label>

      <div class="p-2 border-t">
        <Button on:click={register}>Login</Button>
      </div>
    </form>
  </div>
</div>

<hr class="my-5" />
