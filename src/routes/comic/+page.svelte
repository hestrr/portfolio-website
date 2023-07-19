<script lang="ts">
	import { formatDistance } from 'date-fns';

	function fetchComicId(emailParam: string) {
		const params = new URLSearchParams({ email: emailParam });
		return fetch('https://fwd.innopolis.app/api/hw2?' + params.toString()).then((response) =>
			response.json()
		);
	}

	let src: string;
	let alt: string;
	let title: string;
	let button = 'Fetch comic';

	async function fetchComic() {
		const comicId = await fetchComicId('p.moiseeva@innopolis.university');
		const params = new URLSearchParams({ id: comicId });
		const link = 'https://fwd.innopolis.university/api/comic?' + params.toString();
		fetch(link)
			.then((response) => response.json())
			.then((result) => {
				src = result.img;
				alt = result.alt;
				const date = formatDistance(
					new Date(result.year, result.month, result.day),
					new Date()
				) as string;
				title = result.safe_title + ', ' + date;
				button = 'Fetch another one';
			})
			.catch((err) => console.log(err));
	}
</script>

<div class="container2">
	<div class="comic-button-cell">
		<button id="fetch-comic-button" on:click={() => fetchComic()}>{button}</button>
	</div>
	<div class="comic-cell">
		<p class="regular-text" id="comic-title" style="font-weight: bold;">{title}</p>
		<img id="comic-container" {src} {alt} />
	</div>
</div>

<style>
	.container2 {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 0.5fr 1fr 1fr;
		column-gap: 5vmin;
		grid-template-areas:
			'. . .'
			'. comic-button .'
			'. comic .'
			'. . .';
		height: 100vmin;
	}

	.comic-cell {
		padding: 30px 20px 0 20px;
		grid-area: comic;
	}

	.container2 {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 0.5fr 1fr 1fr;
		column-gap: 5vmin;
		grid-template-areas:
			'. . .'
			'. comic-button .'
			'. comic .'
			'. . .';
		height: 100vmin;
	}

	.comic-button-cell {
		grid-area: comic-button;
	}
</style>
