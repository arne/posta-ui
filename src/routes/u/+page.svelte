<script>
  export let data;
  const [person, counts] = [data.user?.person, data.user?.counts];
</script>

<svelte:head>
  <title>Posta.no: Your page</title>
</svelte:head>

<h1>Hi {person?.name}!</h1>
<ul>
  <li>Posts: {counts?.post_count}</li>
  <li>Comments: {counts?.comment_count}</li>
</ul>
