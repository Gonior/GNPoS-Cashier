<script>
    
    let openMenu = false
    
    
</script>
<div class="flex bg-gray h-full bg-gray-50 shadow-md rounded-lg p-2 flex-col justify-between">
    <!-- header -->
    <div class="flex flex-col relative">
        <div>
            <p class="text-gray-400 italic text-xs ml-1">No.  manifest : 20211080001</p>
        </div>
        <div class="flex items-center space-x-1">
            <input type="text" class="mr-2 rounded shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-1 flex-1" placeholder="Code here..">
            <div class="flex items-center flex-1">
                <label for="tableNumber" class="uppercase text-xs text-gray-400">ket</label>
                <input type="text" id="tableNumber" class="uppercase border-0 border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none w-full ml-1 p-2 text-xl font-bold placeholder-gray-200" placeholder="nama / no. meja">
            </div>
            <button on:click={() => openMenu = !openMenu} class="border-0 transition ease-in-out duration-200 {!openMenu ? 'bg-indigo-500' : 'bg-red-600'} rounded-lg p-2 text-gray-100 focus:outline-none">
                <svg class="h-7 transform transition-transform {!openMenu ? 'scale-y-100' : 'scale-y-75'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {#if !openMenu}
                    <path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2" d="M9 18h12M3 12h18M3 6h12"/>
                {:else }
                    <path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:4" d="M19 12H5"/>
                {/if}
                </svg>
            </button>

        </div>
        
        <div class="flex {openMenu ? 'scale-100' : 'scale-0'} bg-transparent h-96 overflow-hidden transform  ease-in-out duration-300 flex-col absolute right-0 justify-around top-0 mt-16 ">            
            <button class="border-0 outline-none bg-gradient-to-b shadow-2xl from-indigo-600 to-indigo-800 rounded-full p-3 cursor-pointer text-gray-300">
                <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12Zm-5-3H9v4h6ZM9 14a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3h0a3 3 0 0 0-3-3h0a3 3 0 0 0-3 3Z" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"/></svg>
            </button>
            <button class="border-0 outline-none bg-gradient-to-b shadow-2xl from-pink-600 to-pink-800 rounded-full p-3 cursor-pointer text-gray-300 relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0-4-4m4 4-4 4m0 6H4m0 0 4 4m-4-4 4-4"/></svg>
                <div class="h-4 w-4 bg-red-600 rounded-full border-2 border-white right-0 bottom-0 absolute"></div>
            </button>
            <button class="border-0 outline-none bg-gradient-to-b shadow-2xl from-green-600 to-green-800 rounded-full p-3 cursor-pointer text-gray-300">
                <svg class="h-8 w-8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 19h4m-2-2v4m-6 0H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11l2 2v8M16 3v2h2Z" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"/></svg>
            </button>
            <button class="border-0 outline-none bg-gradient-to-b shadow-2xl from-yellow-600 to-yellow-800 rounded-full p-3 cursor-pointer text-gray-300">
                <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2" d="m9 15 6-6M21.36 12c0 1-.86 1.79-1.14 2.67s-.1 2.08-.65 2.83-1.73.94-2.49 1.49-1.28 1.62-2.19 1.91-1.89-.26-2.89-.26-2 .55-2.89.26-1.43-1.36-2.19-1.9-1.92-.73-2.49-1.5-.35-1.92-.65-2.83S2.64 13 2.64 12s.86-1.79 1.14-2.67.1-2.08.65-2.83S6.16 5.56 6.92 5 8.2 3.39 9.11 3.1s1.89.26 2.89.26 2-.55 2.89-.26 1.43 1.36 2.19 1.9 1.92.73 2.49 1.5.35 1.92.65 2.83S21.36 11 21.36 12Z"/><circle cx="14.5" cy="14.5" r=".5" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:2"/><circle cx="9.5" cy="9.5" r=".5" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:2"/></svg>
            </button>
            <button class="border-0 outline-none bg-gradient-to-b shadow-2xl from-red-600 to-red-800 rounded-full p-3 cursor-pointer text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"/></svg>
            </button>
        </div>
    </div>

    
    <!-- body -->
    <div class="flex-1 ">list</div>
    <!-- footer -->
    <div>payment</div>
</div>