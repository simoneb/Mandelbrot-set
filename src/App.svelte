<script lang="ts">
	import { onMount } from "svelte";
	import { generate } from "./generate.ts";
	import Brightness6 from "svelte-material-icons/Brightness6.svelte";
	import Options from "./Options.svelte";
	let width = 300,
		height = 300,
		posX = 0,
		posY = 0,
		zoom = 100;
	let canvas;

	export let version: string;

	let sliderValue = 0;
	let zoomValue: number;
	function sliderBegin() {
		zoomValue = zoom / 100;
	}
	function sliderMove() {
		zoom = Number((Math.pow(2, sliderValue) * zoomValue * 100).toFixed(1));
	}
	function sliderEnd() {
		sliderValue = 0;
	}

	function toggleLightMode() {
		localStorage.lightMode = !document.body.classList.contains("light");
		if (localStorage.lightMode) document.body.classList.toggle("light");
	}
	onMount(async () => {
		if (localStorage.lightMode === "true")
			document.body.classList.add("light");

		const imageDataArray = await generate(300, 300, 0.5, -0.5, 0);
		const imageData = new ImageData(imageDataArray, width);
		canvas.getContext("2d").putImageData(imageData, 0, 0);
	});
</script>

<style>
	h1 {
		font-size: 2em;
		text-align: center;
	}
	canvas {
		border: 1px solid #ccc;
		max-height: 80vh;
		max-width: 80vw;
	}
	.main-container {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
	.container {
		text-align: center;
		display: flex;
		flex-direction: column;
	}
	input[type="range"] {
		padding: 0;
	}
	.version {
		position: absolute;
		top: 1em;
		left: 1em;
	}
	.icon-container {
		position: absolute;
		font-size: 2em;
		top: 0.5em;
		right: 0.5em;
		cursor: pointer;
	}

	@media (min-width: 640px) {
		h1 {
			font-size: 3em;
		}
		.main-container {
			flex-direction: row;
		}
		canvas {
			max-width: 60vw;
		}
	}
</style>

<h1>Mandelbrot set generator</h1>
<span class="version">{version}</span>
<div class="icon-container" on:click={toggleLightMode}>
	<Brightness6 />
</div>
<div class="main-container">
	<div class="container">
		<canvas {width} {height} bind:this={canvas} />
		<input
			type="range"
			min="-1"
			max="1"
			step="0.01"
			bind:value={sliderValue}
			on:mousedown={sliderBegin}
			on:touchstart={sliderBegin}
			on:input={sliderMove}
			on:change={sliderEnd} />
	</div>
	<Options
		bind:width
		bind:height
		bind:posX
		bind:posY
		bind:zoom
		on:update={() => alert(1)} />
</div>
