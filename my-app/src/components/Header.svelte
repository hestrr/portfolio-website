<script>
  import Leaves from "../lib/media/leaves.jpg";
</script>

<div class="header-cell">
  <img id="header" src={Leaves} alt="header" />
  <div id="overlay">
    <h1>Hello, I am Polina Moiseeva!</h1>
  </div>
</div>

<style>
  .header-cell {
    grid-area: header;
  }

  #header {
    width: 100vw;
  }

  #overlay {
    position: absolute;
    top: 75px;
    left: 60px;
    height: 12%;
    width: 91%;
    background-color: rgba(255, 255, 255, 0.6);
  }

  h1 {
    font-size: 50px;
    font-weight: 500;
    color: #444;
    margin-left: 30px;
    margin-top: 10px;
  }
</style>
