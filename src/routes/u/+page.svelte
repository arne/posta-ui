<script>
  export let data;
  const [person, counts] = [data.person, data.counts];
</script>

<h1>Hi {person?.name}!</h1>
{JSON.stringify(counts)}
