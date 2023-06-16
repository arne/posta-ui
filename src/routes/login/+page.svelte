<script lang="ts">
  import {
    Checkbox,
    Label,
    Input,
    Textarea,
    Toggle,
    Range,
    Select,
    Fileupload,
    Radio,
  } from '$lib/forms';

  import { Button } from '$lib/button';

  let minmaxValue = 5;

  let email = '';
  let password = '';

  let selected;
  let countries = [
    { value: 'marcus', name: 'Marcus' },
    { value: 'arne', name: 'Arne' },
    { value: 'magnus', name: 'Magnus' },
  ];

  let fileValue;

  export let login;
</script>

<div class="max-w-sm mb-12 border rounded-md">
  <form method="POST" action="?/login">
    <div class="p-2 flex flex-col gap-3">
      <Label class="space-y-2">
        <span>Email</span>
        <Input type="text" placeholder="User/Email" bind:value={email} />
      </Label>
      <Label class="space-y-2">
        <span>Password</span>
        <Input type="password" placeholder="Password" bind:value={password} />
      </Label>
    </div>

    <div class="p-2 border-t">
      <Button on:click={login}>Login</Button>
    </div>
  </form>
</div>

{#if 0}
  <div>
    <Checkbox>Default checkbox</Checkbox>
    <Checkbox checked>Checked state</Checkbox>
  </div>

  <hr class="my-5" />

  <Label class="space-y-2">
    <span>Small icon input</span>
    <Input type="email" placeholder="Small input" size="sm" />
  </Label>

  <Label class="space-y-2">
    <span>Default icon input</span>
    <Input type="email" placeholder="Default input" size="md" />
  </Label>

  <Label class="space-y-2">
    <span>Large icon input</span>
    <Input type="email" placeholder="Large input" size="lg" />
  </Label>

  <hr class="my-5" />

  <Label for="textarea-id" class="mb-2">Your message</Label>
  <Textarea id="textarea-id" placeholder="Your message" rows="4" name="message" />

  <hr class="my-5" />

  <div class="flex gap-3">
    <Toggle color="red" checked>Red</Toggle>
    <Toggle color="green" checked>Green</Toggle>
    <Toggle color="purple" checked>Purple</Toggle>
    <Toggle color="yellow" checked>Yellow</Toggle>
    <Toggle color="teal" checked>Teal</Toggle>
    <Toggle color="orange" checked>Orange</Toggle>
  </div>

  <hr class="my-5" />

  <Label>Min-max range</Label>
  <Range id="range-minmax" min="0" max="10" bind:value={minmaxValue} />
  <p>Value: {minmaxValue}</p>

  <hr class="my-5" />

  <Label
    >Select an option
    <Select class="mt-2" items={countries} bind:value={selected} />
  </Label>

  <hr class="my-5" />

  <Label class="space-y-2 mb-2">
    <span>Upload file</span>
    <Fileupload bind:fileValue />
  </Label>
  <Label>File: {fileValue}</Label>

  <hr class="my-5" />

  <Radio name="with-link"
    >I agree with the <a
      href="/"
      class="text-primary-600 dark:text-primary-500 hover:underline ml-1">terms and conditions</a
    >.</Radio
  >
{/if}

<hr class="my-5" />
