<script>
	import { model } from './model.js';

	function clk(i, j) {
		model.doStep(i, j);
		model.fields = model.fields	
	}
</script>


{#if model.winner == ' '} 
   <h1>Tic-Tac-Toe Game</h1>
{:else if model.winner == 'X'} 
   <h1>Cross won. Congrat!</h1>
{:else}
   <h1>Zero won. Congrat!</h1>
{/if}

<table>
	{#each [0, 1, 2] as i}
	<tr>
		{#each [0, 1, 2] as j}
		<td><button on:click={() => clk(i,j)} style="color: {model.fields[i][j].c}">
			{model.fields[i][j].v}
		</button></td>
		{/each}
	</tr>
	{/each}
</table>


<style>
	button {
	  width: 100px;
	  height: 100px;
	  font-size: 46px;
	}
	h1 {
		color: red;
	}
 </style>

