<script>
	import Artists from './Artists.svelte';
	export let artists;
</script>

<footer>
	<div class="half left">
		<h3>Follow us</h3>
		<ul class="social-list">
			<li><a href="https://www.instagram.com/mondag_collectief/" target="_blank" class="alt" title="Follow us on Instagram">Instagram</a></li>
			<li><a href="https://mailchimp.com/" target="_blank" class="alt" title="Sign up to our email newsletter">Newsletter</a></li>
		</ul>
		<h3 class="copyright">&copy; 2023 M O N D A G</h3>
	</div>
	<div class="half">
		<h3>Artists</h3>
		<!-- <p>{$page.url.pathname}</p> -->
		<Artists artists={artists} />
	</div>
</footer>

<style>
	footer{
		margin: var(--margin-xxl) var(--margin-xl) var(--margin-xl) var(--margin-xl);
		display: flex;
	}
	.half{
		/* flex: min-content; */
		width: 50%;
	}
	.left {
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
	}
	.social-list{
		flex: 1;
		list-style-type: none;
		margin: 0;
		margin-bottom: var(--margin-lg);
		padding: 0;
	}
	.social-list li{
		margin: var(--margin-sm) 0;
	}
	.copyright{
		margin: 0;
	}
	/* [aria-current="true"]{
		background-color: red;
	} */

	@media (max-width: 1120px) {
		footer {
			margin-left: var(--margin-sm);
			margin-right: var(--margin-sm);
		}
	}
	@media (max-width: 976px) {
		footer {
			flex-direction: column-reverse;
			gap: var(--margin-xl);
			margin-bottom: var(--margin-sm);
		}
		.half{
			/* margin-bottom: var(--margin-xl); */
			width: 100%;
		}
		li{display: block;}
	}

</style>