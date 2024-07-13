<script>
    import Image from './Image.svelte';

    export let exhibitionPhotos;

    // Improved shuffle function for better readability and performance
    function shuffle(array) {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    // Function to process and shuffle exhibition photos
    function processExhibitionPhotos(exhibitionPhotos) {
        let images = exhibitionPhotos.flatMap(exhibitionPhoto =>
            exhibitionPhoto.images && typeof exhibitionPhoto.images === 'object' ?
            Object.values(exhibitionPhoto.images).filter(item => item && typeof item === 'object') :
            []
        );
        return shuffle(images).slice(0, 6);
    }

    // Reactive statement to process exhibitionPhotos
    $: processedExhibitionPhotos = exhibitionPhotos ? processExhibitionPhotos(exhibitionPhotos) : [];
</script>

<section>
    <h2>Past exhibitions</h2>
    <div class="gallery">
        {#each processedExhibitionPhotos as exhPhoto}
            <div class="card">
                <Image image={exhPhoto} altTitle="Photo" bento="true" />
            </div>
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