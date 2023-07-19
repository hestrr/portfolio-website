import { formatDistance } from 'date-fns';

function fetchComicId(emailParam: string) {
    const params = new URLSearchParams({ email: emailParam });
    return fetch('https://fwd.innopolis.app/api/hw2?' + params.toString())
        .then(response => response.json());
}

const comic = document.getElementById("comic-container") as HTMLImageElement;
const comicTitle = document.getElementById("comic-title") as HTMLParagraphElement;
const fetchComicButton = document.getElementById('fetch-comic-button') as HTMLButtonElement;

async function fetchComic() {
    let comicId = await fetchComicId("p.moiseeva@innopolis.university");
    console.log(comicId);
    const params = new URLSearchParams({ id: comicId });
    const link = "https://fwd.innopolis.university/api/comic?" + params.toString();
    console.log(link);
    fetch(link)
        .then(response => response.json())
        .then(result => {
            comic.src = result.img;
            comic.setAttribute("alt", result.alt);
            const date = formatDistance(new Date(result.year, result.month, result.day), new Date()) as string;
            console.log(date);
            comicTitle.textContent = result.safe_title + ", " + date;
            fetchComicButton.textContent = "Fetch another one";
        })
        .catch(err => console.log(err));
}

fetchComicButton.addEventListener('click', () => {
    fetchComic();
});