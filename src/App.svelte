<script>
	import Tailwindcss from './Tailwindcss.svelte';
	import SideBar from './components/SideBar.svelte';
	import Home from './pages/Home.svelte';
	import Income from './pages/Income.svelte';
	import Save from './pages/Save.svelte'
	$: id = 1;
	const pages = [
		{
			id : 1,
			content : Home
		},
		{
			id : 2,
			content : Save
		},
		{
			id : 3,
			content : Income
		},
	]
	const handleChangeMenu = (e) => {
		id = e.detail.content
	}
</script>

<Tailwindcss />
<main class="bg-indigo-600 h-screen p-0 absolute inset-0">
	<div class="flex relative">
		<SideBar on:selectedMenu={(e) => handleChangeMenu(e)}/>
		<div class="w-full h-screen bg-gray-100 rounded-l-3xl shadow-lg p-3 overflow-y-auto">
			<svelte:component this={pages.find(p => p.id === id).content} />
		</div>
		
	</div>
	

</main>

<style global lang="postcss">
	.primary-btn {
		@apply border-0 text-white rounded bg-blue-600 p-2;
	} 
	
</style>
