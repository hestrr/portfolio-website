<script>
	import Telegram from '../lib/media/icons/telegram-icon.png';
	import Mail from '../lib/media/icons/mail-icon.png';
	import Github from '../lib/media/icons/gh-icon.png';
</script>

<div class="about-heading-cell">
	<h2>About me</h2>
</div>
<div class="about-cell">
	<p class="regular-text">
		I am currently an Innopolis University first year student, and am planning to continue my
		education either in Software Development or Applied AI tracks. I am a developing digital artist
		who plans to connect her life with web development and digital design.
	</p>
</div>

<div class="contacts-cell">
	<a id="tg-link" href="https://t.me/hesterika"
		><img class="icon" src={Telegram} alt="telegram link" /></a
	>
	<a id="email" href="mailto:moiseeva.polina@gmail.com"
		><img class="icon" src={Mail} alt="mail link" /></a
	>
	<a id="gh-link" href="https://github.com/hestrr"
		><img class="icon" src={Github} alt="github link" /></a
	>
</div>

<style>
	h2 {
		font-size: 40px;
		font-weight: 600;
		color: #444;
	}

	.icon {
		width: 60px;
		padding: 9px;
	}

	.about-heading-cell {
		padding: 20px 0 0 20px;
		grid-area: about-heading;
	}

	.about-cell {
		padding: 20px 40px 40px 0;
		grid-area: about;
	}

	.contacts-cell {
		grid-area: contacts;
	}
</style>
