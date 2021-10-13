<script>
    import {clickOutside, longpress} from '../lib/myScript'
    import { slide } from 'svelte/transition';
    import {onMount} from 'svelte'
    let openMenu = false
    let menuItemsContainer
    let currentHighlight = - 1;
    let needEditId
    let menus = [
        {
            id:1,
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },
        {
            id:Math.floor((Math.random() * 1000) + 1),
            code:3,
            name : 'Ayam Goreng',
            price : 18000,
            qty : 1,
        },

    ]
    $: lastHighlight = menus.length|| 0
    const handleScroll = (e) => {
        e.preventDefault()
        //40 arrowDown || 38 arrowUp
        let tempHighlight = currentHighlight
        if (e.keyCode === 40 && currentHighlight < lastHighlight - 1) currentHighlight = currentHighlight + 1
        if (e.keyCode === 38 && currentHighlight > 0) currentHighlight = currentHighlight-1
        // console.log({tempHighlight, currentHighlight})
        if (tempHighlight !== currentHighlight) {
            changeState(currentHighlight, false)
        }
    }
    const changeState = (i, addNew) => {
        if (!addNew) {
            
            menuItemsContainer.childNodes.forEach(e => e.classList.remove('bg-gray-300'))
            menuItemsContainer.children[i].classList.add('bg-gray-300')
            menuItemsContainer.children[i].scrollIntoView({ behavior: 'smooth', block: 'center'})
            currentHighlight = i
        } else {menuItemsContainer.children[lastHighlight-1].scrollIntoView({ behavior: 'smooth', block: 'center'})}
        
    }
    const handleClickOutside = (e) => {
        currentHighlight = -1
        menuItemsContainer.childNodes.forEach(e => e.classList.remove('bg-gray-300'))
        needEditId = null
    }
    const handleEdit = (e, {id}) => {
        if (e.keyCode === 37 ||e.keyCode === 39) {
            console.log(id)
        }
    }
</script>
<!-- <svelte:window on:keydown="{handleScroll}" /> -->
<div class="flex h-full shadow-md rounded-lg flex-col justify-between" >
    <!-- header -->
    <div class="flex flex-col relative p-2">
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
        
        <div class="flex z-20 {openMenu ? 'scale-100' : 'scale-0'} h-80 overflow-hidden transform  ease-in-out duration-300 flex-col absolute right-0 justify-around top-2 mt-16 mr-3">
            <button class="border-0 outline-none bg-gradient-to-b shadow-2xl from-indigo-600 to-indigo-800 rounded-full p-2 cursor-pointer text-gray-300">
                <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12Zm-5-3H9v4h6ZM9 14a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3h0a3 3 0 0 0-3-3h0a3 3 0 0 0-3 3Z" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"/></svg>
            </button>
            <button class="border-0 outline-none bg-gradient-to-b shadow-2xl from-pink-600 to-pink-800 rounded-full p-2 cursor-pointer text-gray-300 relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0-4-4m4 4-4 4m0 6H4m0 0 4 4m-4-4 4-4"/></svg>
                <div class="h-4 w-4 bg-red-600 rounded-full border-2 border-white right-0 bottom-0 absolute"></div>
            </button>
            <button class="border-0 outline-none bg-gradient-to-b shadow-2xl from-green-600 to-green-800 rounded-full p-2 cursor-pointer text-gray-300">
                <svg class="h-8 w-8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 19h4m-2-2v4m-6 0H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11l2 2v8M16 3v2h2Z" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"/></svg>
            </button>
            <button class="border-0 outline-none bg-gradient-to-b shadow-2xl from-yellow-600 to-yellow-800 rounded-full p-2 cursor-pointer text-gray-300">
                <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2" d="m9 15 6-6M21.36 12c0 1-.86 1.79-1.14 2.67s-.1 2.08-.65 2.83-1.73.94-2.49 1.49-1.28 1.62-2.19 1.91-1.89-.26-2.89-.26-2 .55-2.89.26-1.43-1.36-2.19-1.9-1.92-.73-2.49-1.5-.35-1.92-.65-2.83S2.64 13 2.64 12s.86-1.79 1.14-2.67.1-2.08.65-2.83S6.16 5.56 6.92 5 8.2 3.39 9.11 3.1s1.89.26 2.89.26 2-.55 2.89-.26 1.43 1.36 2.19 1.9 1.92.73 2.49 1.5.35 1.92.65 2.83S21.36 11 21.36 12Z"/><circle cx="14.5" cy="14.5" r=".5" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:2"/><circle cx="9.5" cy="9.5" r=".5" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:2"/></svg>
            </button>
            <button class="border-0 outline-none bg-gradient-to-b shadow-2xl from-red-600 to-red-800 rounded-full p-2 cursor-pointer text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"/></svg>
            </button>
        </div>
    </div>

    
    <!-- body -->
    <div use:clickOutside on:click_outside={handleClickOutside} tabindex="0" on:keydown={handleScroll} class="focus:outline-none flex-1 px-2 overflow-y-auto text-xs uppercase cursor-pointer" >
        <table class="w-full relative rounded-lg table-fixed">
            <thead>
                <tr>
                  <th class="sticky bg-gray-200 top-0 py-2 px-2 w-1/2 text-black text-left">nama menu</th>
                  <th class="sticky bg-gray-200 top-0 text-black">Harga</th>
                  <th class="sticky bg-gray-200 top-0 w-1/6 text-black">QTY</th>
                  <th class="sticky bg-gray-200 top-0 px-2 text-black text-right">Subtotal</th>
                </tr>
            </thead>
            <tbody class="divide-y" bind:this={menuItemsContainer}>
                {#each menus as menu }
                <tr tabindex="0" class="focus:outline-none px-2 " on:click={() => changeState(menus.indexOf(menu), false)} on:dblclick={() => needEditId = menu.id}>
                    
                    <td class="px-2 py-1 relative">
                        {#if menu.id === needEditId} 
                            <div transition:slide class="flex items-center justify-between px-4 bg-gradient-to-r from-red-600 to-blue-600 text-gray-200 absolute inset-0 z-10">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                                <button>edit</button>
                            </div>
                        {/if}
                        {menu.name}
                    </td>
                    <td class="text-center">{menu.price}</td>
                    <td class="text-center">{menu.qty}</td>
                    <td class="px-2 text-right">{menu.qty * menu.price}</td>
                    
                </tr>
                {/each}
                <!-- <tr class="bg-gray-300">
                    <td class="px-2">Ayam Kampung Goreng</td>
                    <td class="text-center">35.000</td>
                    <td class="text-center">
                        <div class="flex justify-center">
                            <input type="number" class="py-1 w-10 text-center focus:outline-none focus:border-0 rounded " value="1">
                        </div>
                    </td>
                    <td class="px-2 text-right">75.000</td>
                </tr>
                <tr class="bg-gray-300">
                    <td class="px-2">Ayam Kampung Goreng</td>
                    <td class="text-center">35.000</td>
                    <td class="">
                        <div class="flex justify-center space-x-1">
                            <button class="text-white bg-red-600 rounded-lg p-0.5 shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                </svg>
                            </button>
                            <input type="number" class="py-1 w-10 text-center focus:outline-none focus:border-0 rounded " bind:value={menu.qty}>
                            <button class="text-white bg-green-600 rounded-lg p-1 shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
                                  </svg>
                            </button>
                        </div>
                        
                    </td>
                    <td class="px-2 text-right">75.000</td>
                </tr> -->
            </tbody>
        </table>
    </div>
    <!-- footer -->
    <div class="p-2 shadow-lg rounded-b-lg flex justify-between items-center">
        <div class="flex flex-1 mr-1 text-xs bg-gradient-to-tr from-gray-800 to-gray-600 text-gray-200 p-2 rounded-lg justify-between">
            <div class="flex flex-col justify-between">
                <h4 class="uppercase ">total</h4>
                <h1 class="text-4xl font-bold font-sans">Rp 120.000</h1>
            </div>
            <div class="w-1/3 flex flex-col justify-center mr-2">
                <div class="flex justify-between items-center">
                    <h1 class="text-xs">Subtotal</h1>
                    <h1>120.000</h1>
                </div>
                <div class="flex justify-between items-center">
                    <h1>Uang Muka</h1>
                    <h1>10.000</h1>
                </div>
                <div class="flex justify-between items-center">
                    <h1>Discount</h1>
                    <h1>12.000</h1>
                </div>
            </div>
            
            

        </div>
        <div class="flex-0">
            <button class="py-2 px-5 bg-indigo-600 text-gray-200 flex flex-col items-center rounded-lg">
                <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 17h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 14h12v7H6zM17 10h-2M8 3h8a1 1 0 0 1 1 1v2h0H7h0V4a1 1 0 0 1 1-1ZM7.04 10.06h0"/></svg>
                <span class="text-xs uppercase font-semibold">Print</span>
            </button>
        </div>
        
    </div>
</div>

