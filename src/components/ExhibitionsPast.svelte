<script>
    import Image from './Image.svelte';

    export let exhibitions;
    let exhibitionImages = [];

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    $: {
        if (exhibitions) {
            // Get all images from the exhibitions
            exhibitionImages = exhibitions.map(exhibition => 
                Object.entries(exhibition.images)
                    .map(([, value]) => value)
                    .filter(item => typeof item === 'object' && item !== null)
            ).flat();

            // Shuffle the array and reduce it to the first 6 items
            exhibitionImages = shuffle(exhibitionImages).slice(0, 6);

            console.log(exhibitionImages);
        }
    }
</script>

<section>
    <h2>Past exhibitions</h2>
    <div class="gallery">
        {#each exhibitionImages as image}
            <div class="card"><Image image={image} altTitle="Photo" bento="true" /></div>
        {/each}
    </div>
</section>

<style>
    section{
        margin-top: var(--margin-xl);
    }

.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, calc(2 *var(--margin-xxl)));
    gap: var(--margin-sm);
    margin: var(--margin-lg) calc(-1 * var(--margin-md)) 0 calc(-1 * var(--margin-md));
    text-align: center;
}

.gallery > .card {
    overflow: hidden;
}

.card:nth-child(1) {
    grid-area: 1 / 1 / span 1 / span 1;
}

.card:nth-child(2) {
    grid-area: 1 / 2 / span 2 / span 1;
}

.card:nth-child(3) {
    grid-area: 1 / 3 / span 1 / span 1;
}

.card:nth-child(4) {
    grid-area: 2 / 1 / span 2 / span 1;
}

.card:nth-child(5) {
    grid-area: 2 / 3 / span 1 / span 1;
}

.card:nth-child(6) {
    grid-area: 3 / 2 / span 1 / span 2;
}

@media screen and (max-width: 500px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, calc(3 *var(--margin-xl)));
  }

  .card:nth-child(1) {
    grid-area: 1 / 1 / span 1 / span 2;
  }

  .card:nth-child(2) {
    grid-area: 2 / 2 / span 2 / span 1;
  }

  .card:nth-child(3) {
    grid-area: 2 / 1 / span 1 / span 1;
  }

  .card:nth-child(4) {
    grid-area: 3 / 1 / span 2 / span 1;
  }

  .card:nth-child(5) {
    grid-area: 4 / 2 / span 1 / span 1;
  }

  .card:nth-child(6) {
    grid-area: 5 / 1 / span 1 / span 2;
  }
}

</style>