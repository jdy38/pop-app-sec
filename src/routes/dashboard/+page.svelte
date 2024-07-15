<script>
    import { AppBar } from '@skeletonlabs/skeleton';
    import logo from '$lib/assets/logo.webp';
    import Navbar from './Navbar.svelte';
	import Sidebar from './Sidebar.svelte';
    import Main from './Main.svelte';
    
    let open = false;
</script>

<div class="div-1">
    <AppBar>
        <svelte:fragment slot="lead">
            <div class="logo-container">
                <img src= {logo} alt="Logo" style="height: 70px; width: auto;" />
            </div>
        </svelte:fragment>
        <svelte:fragment slot="trail">
            <p class="font-sans text-white">Hi, Jed!</p>

            <div class="circle-placeholder"></div>

            <p class="font-sans text-yellow-500 underline">Logout</p>
        </svelte:fragment>
    </AppBar>
</div>

<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>
<Main/>

<style>
    .div-1 {
        background-color: #C33521;
    }

    .circle-placeholder {
        width: 40px; 
        height: 40px;
        border-radius: 50%; 
        background-color: #ccc; 
        margin-right: 10px; 
        display: inline-block; 
    }
</style>

