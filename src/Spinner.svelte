<script lang="ts">
    export let lightMode = false;
</script>
<style>
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    div{
        width: 2em;
        height: 2em;
        border-radius: 50%;
        border: 7px solid var(--color);
        border-top: 7px solid transparent;
        animation: rotate infinite 2s linear;
    }
</style>
<div style={`--color: ${lightMode ? "#333" : "#ccc"}`} />