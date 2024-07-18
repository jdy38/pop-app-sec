<script>
	import '../app.css';
	// import { AppShell, AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';

	import logo from '$lib/assets/logo.webp';
  import Sidebar from '$lib/custom_comp/Sidebar.svelte';
  import { AppBar } from '@skeletonlabs/skeleton';

  export let loggedIn = true;
</script>

<AppBar background="bg-primary-500">
  <svelte:fragment slot="lead">
      <img src={logo} alt="logo" class='h-16' />
  </svelte:fragment>
  <svelte:fragment slot="trail">
    {#if loggedIn}
      <p class="font-sans text-white">Hi, Jed!</p>

      <div class="circle-placeholder"></div>

      <button class="font-sans text-yellow-500 underline" on:click={() =>{loggedIn = false;}}>
        Logout
      </button>
    {/if}
  </svelte:fragment>
</AppBar>
<div class='size-full flex flex-row'>
  {#if loggedIn}
    <Sidebar />
  {/if}
  <slot />
</div>