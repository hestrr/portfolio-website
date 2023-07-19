<script>
	import Picture from '../lib/media/myself.jpg';
</script>

<div class="image-cell">
	<img src={Picture} alt="myself" />
</div>

<style>
	img {
		margin-left: 60px;
		margin-top: 60px;
		width: 350px;
	}

	.image-cell {
		grid-area: image;
	}
</style>
