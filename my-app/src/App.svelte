<script lang="ts">
  import Header from "./components/Header.svelte";
  import About from "./components/About.svelte";
  import Education from "./components/Education.svelte";
  import Picture from "./components/Picture.svelte";
  import LinkToComic from "./components/Link-to-comic.svelte";
</script>

<main>
  <div class="container1">
    <Header />
    <Picture />
    <About />
    <Education />
    <LinkToComic />
  </div>
</main>

<style>
  .container1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 0.7fr 1fr 0.7fr;
    grid-template-areas:
      "header header header"
      "image about-heading education-heading"
      "image about education"
      "image contacts comic";
    height: 100vmin;
  }
</style>
