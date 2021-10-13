<script>
    import {createEventDispatcher} from 'svelte'
    // import {ipcRenderer} from 'electron'
    const {ipcRenderer} = window.require('electron')
    const dispatch = createEventDispatcher()
    let menus = [
        {
            id : 1,
            name : "dashbord",  
            icon : '<svg class="w-8 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="2" y="2" width="9" height="11" rx="2" style="fill:currentColor"/><rect x="13" y="2" width="9" height="7" rx="2" style="fill:currentColor"/><rect x="2" y="15" width="9" height="7" rx="2" style="fill:currentColor"/><rect x="13" y="11" width="9" height="11" rx="2" style="fill:currentColor"/></svg>',
            active : true,
        },
        {
            id : 2,
            name : "save",  
            icon : '<svg class="h-7 w-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 2H6a2 2 0 0 0-2 2v17a1 1 0 0 0 .5.86 1 1 0 0 0 1 0l6.5-3.71 6.5 3.72a1 1 0 0 0 .5.13.9.9 0 0 0 .5-.14A1 1 0 0 0 20 21V4a2 2 0 0 0-2-2Z" style="fill:currentColor"/></svg>',
            active : false,
        },
        {
            id : 3,
            name : "income",  
            icon : '<svg class="h-7 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 13v2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2Zm-2 5a2.85 2.85 0 0 0 1-.18V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.79l7.93-3.53a2 2 0 0 1 2.6.94L17.62 6H19a2 2 0 0 1 2 2v2.18a2.85 2.85 0 0 0-1-.18h-3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3ZM10.71 6h4.67l-.85-1.7Z" style="fill:currentColor"/></svg>',
            active : false,
        },
    ]
    const changeMenu = (id) => {
        menus = [...menus.map(v=> {
            v.active = false
            return v
        })]
        menus.find(v => v.id === id).active = true
        dispatch('selectedMenu', {
            content : menus.find(menu => menu.active === true).id
        })
    }

    const handleQuit = () => {
        console.log('close')
        ipcRenderer.send('close-me')
        
        // dedi()
        // window.closeCurrentWindow();
    }
    
</script>
<div class="flex-0 h-screen">
    <div class="h-full flex w-full flex-col justify-between py-6 px-2 items-center">
        <div>
            <svg class="icon line text-white" width="48" height="48" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 13a3 3 0 1 1-3-3 3 3 0 0 1 3 3Zm-.85-2.15 4.44-4.44m-8.71 8.71L7 17M19 3a2 2 0 1 0 2 2 2 2 0 0 0-2-2ZM5 21a2 2 0 1 0-2-2 2 2 0 0 0 2 2Zm14-1a2 2 0 1 0-2-2 2 2 0 0 0 2 2Zm-5.47-5.39L17.27 17M6 7a2 2 0 1 0-2-2 2 2 0 0 0 2 2Zm3.39 3.47L7 6.73" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1"/></svg>
        </div>
        <div class="flex flex-col space-y-12">
            {#each menus as menu}
                <button on:click={() => changeMenu(menu.id)} class="z-10 rounded-2xl p-4 transition {menu.active ? 'translate-x-10 bg-gray-50 shadow-lg text-red-600':'hover:bg-gray-50'} transform duration-300 ease-in-out ">
                    {@html menu.icon}
                </button>
            {/each}
        </div>
        <div>
            <button class="flex flex-col items-center text-red-500 p-2 rounded-lg bg-gray-200" on:click={() => handleQuit()}>
                <svg class="h-5 w-5 "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 13a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v9a1 1 0 0 1-1 1Z" style="fill:currentColor;stroke-width:2"/><path d="M12 22A9 9 0 0 1 5.64 6.64a1 1 0 0 1 1.41 1.41 7 7 0 1 0 9.9 0 1 1 0 0 1 1.41-1.41A9 9 0 0 1 12 22Z" style="fill:currentColor;stroke-width:6"/></svg>
                <!-- <span class="text-xs uppercase tracking-widest font-bold">Keluar</span> -->
            </button>
        </div>
    </div>
</div>

<style>
    button {
        @apply border-0 cursor-pointer ;
    }
</style>