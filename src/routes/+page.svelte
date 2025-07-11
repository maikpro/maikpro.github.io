<script lang="ts">
    let count=0;
</script>


<h1>Svelte Version Website</h1>
<h2>Counter: {count}</h2>
<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" on:click={() => count++}>+</button>
<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" on:click={() => count--}>-</button>



