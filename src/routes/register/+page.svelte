<script lang="ts">
  import { Button } from '$lib/button';
  import { Label, Input, Textarea } from '$lib/forms';
  import { enhance } from '$app/forms';
  import { superForm } from 'sveltekit-superforms/client';
  import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
  import { page } from '$app/stores';

  export let data;
  const { form, errors, constraints, message } = superForm(data.form);
</script>

<svelte:head>
  <title>Posta.no: Register</title>
</svelte:head>

<div class="max-w-sm mb-12 border rounded-md">
  <div class="p-2 flex flex-col gap-3">
    <form method="POST" use:enhance>
      <Label class="space-y-2">
        <span>Username</span>
        <Input
          type="text"
          name="username"
          placeholder="User"
          aria-invalid={$errors.username ? 'true' : undefined}
          bind:value={$form.username}
          {...$constraints.username}
        />
        {#if $errors.username}
          <p class="text-red-500">{$errors.username}</p>
        {/if}
      </Label>
      <Label class="space-y-2">
        <span>Email</span>
        <Input
          type="text"
          name="email"
          placeholder="user@means.you"
          aria-invalid={$errors.email ? 'true' : undefined}
          bind:value={$form.email}
          {...$constraints.email}
        />
        {#if $errors.email}
          <p class="text-red-500">{$errors.email}</p>
        {/if}
      </Label>
      <Label class="space-y-2">
        <span>Password</span>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          bind:value={$form.password}
          aria-invalid={$errors.password ? 'true' : undefined}
          {...$constraints.password}
        />
        {#if $errors.password}
          <p class="text-red-500">{$errors.password}</p>
        {/if}
      </Label>
      <Label class="space-y-2">
        <span>Verify Password</span>
        <Input
          type="password"
          name="password_verify"
          placeholder="Password"
          aria-invalid={$errors.password_verify ? 'true' : undefined}
          bind:value={$form.password_verify}
          {...$constraints.password_verify}
        />
        {#if $errors.password_verify}
          <p class="text-red-500">{$errors.password_verify}</p>
        {/if}
      </Label>
      <Label class="space-y-2">
        <span>Why Are You Signing Up?</span>
        <Textarea name="answer">{$form.answer}</Textarea>
        {#if $errors.answer}
          <p class="text-red-500">{$errors.answer}</p>
        {/if}
      </Label>

      <div class="p-2 border-t">
        <Button>Register</Button>
      </div>
      {#if $message}
        <div class:text-green-500={$page.status == 200} class:text-red-500={$page.status >= 400}>
          {$message}
        </div>
      {/if}
    </form>
  </div>
</div>

<hr class="my-5" />
