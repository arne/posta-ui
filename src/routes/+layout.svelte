<header>
	<div class="container">
		<a href="/" class="link">
			<img src="/p.svg" alt="Posta logo" />
			<h1>Posta</h1>
		</a>
		<nav>
			<a href="/login" class="link">Login</a>
			<a href="/register" class="link">Register</a>
		</nav>
	</div>
</header>
<div class="container">
	<slot />
</div>

<style>
	header {
		border-bottom: thin solid #e0e5e9;
	}
	h1 {
		font-size: 1rem;
		margin-left: 0.25rem;
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
