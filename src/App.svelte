<script lang="ts">
	import { onMount } from "svelte";
	import { generate } from "./generate";
	import { Point } from "./point";
	import Brightness6 from "svelte-material-icons/Brightness6.svelte";
	import Options from "./Options.svelte";
	import Spinner from "./Spinner.svelte";

	let width = 300,
		height = 300,
		offset = new Point(0, 0),
		zoom = 50,
		zoomFactor: number;
	$: zoomFactor = zoom / 100;
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let calculating = false;

	export let version: string;

	let sliderValue = 0;
	let oldZoom: number;
	function sliderBegin() {
		oldZoom = zoom;
		image.src = canvas.toDataURL();
	}
	function sliderMove() {
		const zoomDifference = Math.pow(2, sliderValue);
		zoom = Number((zoomDifference * oldZoom).toFixed(1));
		ctx.clearRect(0, 0, width, height);
		ctx.drawImage(
			image,
			(width - width * zoomDifference) / 2,
			(height - height * zoomDifference) / 2,
			width * zoomDifference,
			height * zoomDifference
		);
	}
	async function sliderEnd() {
		sliderValue = 0;
		await drawMandelbrot();
	}

	function toggleLightMode() {
		localStorage.lightMode = !document.body.classList.contains("light");
		if (localStorage.lightMode) document.body.classList.toggle("light");
	}

	let mousedown = false;
	let mouseStartingPos: Point;
	let image = new Image();
	let oldOffset: Point;
	function canvasDragBegin(eventOffset: Point) {
		mousedown = true;
		mouseStartingPos = eventOffset;
		image.src = canvas.toDataURL();
		oldOffset = offset.copy();
	}
	function canvasDragMove(eventOffset: Point) {
		if (mousedown) {
			const dragOffset = new Point(
				eventOffset.x - mouseStartingPos.x,
				eventOffset.y - mouseStartingPos.y
			);
			ctx.clearRect(0, 0, width, height);
			ctx.drawImage(image, dragOffset.x, dragOffset.y);

			offset.x = oldOffset.x - dragOffset.x / width / zoomFactor;
			offset.y = oldOffset.y + dragOffset.y / height / zoomFactor;
		}
	}
	async function canvasDragEnd(eventOffset?: Point) {
		if (eventOffset) canvasDragMove(eventOffset);
		mousedown = false;
		await drawMandelbrot();
	}

	function canvasSwipeBegin(event: TouchEvent) {
		event.preventDefault();
		canvasDragBegin(
			new Point(event.touches[0].clientX, event.touches[0].clientY)
		);
	}
	function canvasSwipeMove(event: TouchEvent) {
		event.preventDefault();
		canvasDragMove(
			new Point(event.touches[0].clientX, event.touches[0].clientY)
		);
	}
	async function canvasSwipeEnd(event: TouchEvent) {
		event.preventDefault();
		await canvasDragEnd();
	}

	async function drawMandelbrot() {
		calculating = true;
		const imageDataArray = await generate(
			width,
			height,
			zoomFactor,
			offset
		);
		const imageData = new ImageData(imageDataArray, width);
		ctx.putImageData(imageData, 0, 0);
		calculating = false;
	}

	onMount(async () => {
		if (localStorage.lightMode === "true")
			document.body.classList.add("light");

		ctx = canvas.getContext("2d");

		await drawMandelbrot();
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
		cursor: grab;
	}
	canvas:active,
	input[type="range"]:active {
		cursor: grabbing;
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
		cursor: grab;
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
	.overlay {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.3);
		cursor: wait;
	}
	.spinner-container {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
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
		<canvas
			{width}
			{height}
			bind:this={canvas}
			on:mousedown={(event) => canvasDragBegin(new Point(event.offsetX, event.offsetY))}
			on:mousemove={(event) => canvasDragMove(new Point(event.offsetX, event.offsetY))}
			on:mouseup={(event) => canvasDragEnd(new Point(event.offsetX, event.offsetY))}
			on:touchstart={canvasSwipeBegin}
			on:touchmove={canvasSwipeMove}
			on:touchend={canvasSwipeEnd} />
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
		bind:offset
		bind:zoom
		on:update={drawMandelbrot} />
</div>
{#if calculating}
	<div class="overlay">
		<div class="spinner-container">
			<Spinner lightMode={localStorage.lightMode === 'true'} />
		</div>
	</div>
{/if}
