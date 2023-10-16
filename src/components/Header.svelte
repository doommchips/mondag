<script>
	import { page } from '$app/stores';
</script>

<header>
	<!-- {$page.url.pathname} -->
    <h1>
		<a href="/" title="M O N D A G &mdash; home" class="alt" class:home={$page.url.pathname === '/'}>
			<span class="letter">M</span>
			<span class="letter">O</span>
			<span class="letter">N</span>
			<span class="letter">D</span>
			<span class="letter">A</span>
			<span class="letter">G</span>
		</a>
    </h1>
</header>

<style>
	header{
		text-align: center;
	}
	h1{
		font-size: 1em;
	}
	a{
		display: flex;
		font-size: 0.666em;
		font-weight: 700;
        line-height: 1em;
        margin: 0;
	}
	a.home{
		font-size: 5.333em;
	}
	a:hover{
		text-decoration: none;
	}
	.letter{
		flex-grow: 1;
	}
	
	@media (max-width: 976px) {
		h1{
			margin-left: calc(-1 * var(--margin-md));
			margin-right: calc(-1 * var(--margin-md));
		}
		a.home{
			font-size: 2em;
		}
	}
</style>