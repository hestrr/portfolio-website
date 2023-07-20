<script lang="ts">
    import { formatDistance } from 'date-fns';
	import { get } from 'svelte/store';

    interface Joke {
        month: string;
        num: number;
        link: string;
        year: string;
        news: string;
        safe_title: string;
        transcript: string;
        alt: string;
        img: string;
        title: string;
        day: string;
    }

    async function fetchComicId(emailParam: string) {
        const params = new URLSearchParams({email: emailParam});
        return (await fetch('https://fwd.innopolis.app/api/hw2?' + params.toString())).json()
    }

    async function getJoke(): Promise<Joke> {
        const comicId = await fetchComicId("p.moiseeva@innopolis.university");
        const params = new URLSearchParams({id: comicId});
        const link = 'https://fwd.innopolis.university/api/comic?' + params.toString();
        return (await fetch(link)).json()
    }

    function getTitleWithDate(data : {props : Joke}) : string {
    const date = formatDistance(new Date(parseInt(data.props.year), parseInt(data.props.month), parseInt(data.props.day)), new Date()) as string;
    return data.props.safe_title + ", " + date;
}

    export async function load() {
        return {props: await getJoke()}
    }

    export let data;
</script>

<div class="container2">
    <div class="comic-button-cell">
        <button id="fetch-comic-button" on:click={async () => data=await load()}>Get another comic</button>
    </div>
    <div class="comic-cell">
        <p class="regular-text" id="comic-title" style="font-weight: bold;">{getTitleWithDate(data)}</p>
        <img id="comic-container" src={data.props.img} alt={data.props.alt}/>
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
