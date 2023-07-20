import { formatDistance } from 'date-fns';

const getComicButton = "Get comic";

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

export async function load() {
    return {props: await getJoke()}
}

function getTitleWithDate(data : {props : Joke}) : string {
    const date = formatDistance(new Date(parseInt(data.props.year), parseInt(data.props.month), parseInt(data.props.day)), new Date()) as string;
    return data.props.safe_title + ", " + date;
}

export const ssr = true;