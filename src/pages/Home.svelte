<script>
    import { fade } from 'svelte/transition';
    import MainField from '../components/MainField.svelte';
</script>

<div in:fade={{duration:200}} class="flex h-full">
    <div class="w-1/2 p-2">
        <MainField/></div>
    <div class="w-1/2 p-2" ><MainField/></div>
    
    
</div>