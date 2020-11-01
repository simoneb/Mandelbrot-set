<script lang="ts">
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();
    function update() {
        dispatch("update");
    }

    export let width: number,
        height: number,
        posX: number,
        posY: number,
        zoom: number;
</script>

<style>
    h2 {
        font-size: 1.3em;
        margin-bottom: 0.3em;
    }
    .container {
        text-align: center;
    }
    input {
        width: 5em;
    }
    .container div:first-of-type h2 {
        margin-top: 0;
    }
    button{
        margin-top: 1em;
    }

    /* Remove arrow button from number input */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }

    @media (min-width: 640px) {
        h2 {
            font-size: 1.7em;
        }
    }
</style>

<div class="container">
    <div>
        <h2>Center position</h2>
        (<input type="number" bind:value={posX} />,
        <input type="number" bind:value={posY} />)
    </div>
    <div>
        <h2>Zoom</h2>
        <input type="number" step="0.1" bind:value={zoom} />%
    </div>
    <div>
        <h2>Canvas size</h2>
        <input type="number" bind:value={width} />
        &times;
        <input type="number" bind:value={height} />
    </div>
    <button on:click={update}>Update</button>
</div>
