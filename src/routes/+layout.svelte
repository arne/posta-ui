<header>
	<div class="container flex -space-between">
		<a href="/" class="link flex">
			<img src="/p.svg" alt="Posta logo" />
			<h1>Posta</h1>
		</a>
		<nav>
			<a href="/login" class="link">Login</a>
			<a href="/register" class="link">Register</a>
		</nav>
	</div>
</header>
<div class="container flex -space-between padding-top">
	<slot />
</div>

<style>
	header {
		border-bottom: thin solid #e0e5e9;
		padding: 1rem 0;
	}
	.padding-top {
		padding-top: 1rem;
	}
	h1 {
		font-size: 1rem;
		margin-left: 0.25rem;
		font-weight: 600;
	}
	.link,
	nav {
		display: flex;
		text-decoration: none;
		color: inherit;
	}
	nav a {
		margin-left: 0.5rem;
	}
</style>
