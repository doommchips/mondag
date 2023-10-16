<script>
    import { PortableText } from '@portabletext/svelte';

    export let artistName;
    export let statement;
    export let bio;
    export let links;
</script>

<section>
    <div class="offset">
        <!-- social links -->
        <div class="links">
            <h3>Links</h3>
            {#if links}
                <ul>
                    {#if links.portfolioUrl}
                        <li><a href="{links.portfolioUrl}" title="Open {artistName}'s online portfolio" target="_blank">Portfolio</a></li>
                    {/if}
                    {#if links.linkedinUrl}
                        <li><a href="{links.linkedinUrl}" title="Open {artistName}'s LinkedIn profile" target="_blank">LinkedIn</a></li>
                    {/if}
                    {#if links.instagramUrl}
                        <li><a href="{links.instagramUrl}" title="Open {artistName}'s Instagram profile" target="_blank">Instagram</a></li>
                    {/if}
                </ul>
            {:else}
                <p>{artistName} doesn't need to be found online</p>
            {/if}
        </div>

        <div class="offset-container">
            <!-- needed because bio_en and bio_nl are objects -->
            <div class="statement">
                <h3>Statement</h3>
                <PortableText value={statement.en} />
            </div>
            <div class="bio">
                <h3>Biography</h3>
                <PortableText value={bio.en} />
            </div>
        </div>
    </div>
	
</section>

<style>
    section{
        margin: var(--margin-lg) 0;
    }
    .statement, .bio{
        margin-bottom: var(--margin-lg);
    }
    .links{
        flex: 1;
    }
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li{
        margin: var(--margin-sm) 0;
    }

	@media (max-width: 816px) {
        .offset{
            flex-direction: column;
        }
	}
</style>