// const comicButton = document.getElementById("comic-button");
// const comicIdParagraph = document.getElementById("comic-id");

function fetchComicId(emailParam) {
    const params = new URLSearchParams({ email: emailParam });
    return fetch('https://fwd.innopolis.app/api/hw2?' + params.toString())
        .then(response => response.json());
}

// comicButton.addEventListener('click', async function () {
//     const comicId = await fetchComicId("p.moiseeva@innopolis.university");
//     comicIdParagraph.innerHTML = comicId;
// });


const comic = document.getElementById("comic-container");
const comicTitle = document.getElementById("comic-title");

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
            const date = new Date(result.year, result.month, result.day);
            console.log(date.toLocaleDateString());
            comicTitle.textContent = result.safe_title + ", " + date.toLocaleDateString();
            document.getElementById('fetch-comic-button').textContent = "Fetch another one";
        })
        .catch(err => console.log(err));
    // document.getElementById('fetch-comic-button').remove();
}

const button = document.getElementById('fetch-comic-button');
button.addEventListener('click', () => {
    fetchComic();
    // button.textContent = "Fetch another one";
});