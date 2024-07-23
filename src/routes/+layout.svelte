<script lang="ts">
	import '../app.css';
  import { loggedIn } from '../stores.js';
	import logo from '$lib/assets/logo.webp';
  import { AppBar } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

  export let data;

  let open = true;
  let openCourse = true;

  const openSidebar = () => {open = !open};
  const openCourses = () => {openCourse = !openCourse};
  
  const baseCss = 'flex flex-col h-full w-16 gap-0 bg-tertiary-700 shrink-0';
  const transitionCss = 'transition ease-out duration-200';

  function getHref(sectionid: number) {
    const strSectionID = sectionid.toString();
    if (strSectionID[0] === "1") {
      return `/section/${sectionid}`;
    } else {
      // Given the sectionID, find the first page
      // If section.sectionID matches that of requirement.sectionID, get the first page of that section 
      const requirements = data.requirements.find(req => req.sectionID === sectionid);
      if (requirements) {
        return `/course/${requirements.pages}`;
      }
    }
    
  }
</script>

<!-- Navbar -->
<AppBar background="bg-primary-500">
  <svelte:fragment slot="lead">
      <img src={logo} alt="logo" class='h-16' />
  </svelte:fragment>
  <svelte:fragment slot="trail">
    {#if $loggedIn}
      <p class="font-sans text-white">Hi, Jed!</p>

      <div class="circle-placeholder"></div>

      <button class="font-sans text-yellow-500 underline" on:click={() => { $loggedIn = false; goto('/'); }}>
        Logout
      </button>
    {/if}
  </svelte:fragment>
</AppBar>

<div class='size-full flex flex-row'>
  {#if $loggedIn}
    <!-- Sidebar -->
    <div class='{baseCss} {transitionCss}' class:open>
      <button class='size-16 hover:bg-blue-500 shrink-0' on:click={openSidebar}>
        {open ? 'X' : 'O'}
      </button>
      <div class='flex flex-row h-16 hover:bg-tertiary-800 shrink-0'>
        <a class='h-full w-16 text-center align-middle hover:bg-blue-500' href='/dashboard'>.</a>
        {#if open}
          <button class='flex h-full justify-between grow items-center' on:click={openCourses}>
            <div>Courses</div>
            <span class='w-16'>
              {openCourse ? 'v' : '>'}
            </span>
          </button>
        {/if}
      </div>
      {#if open && openCourse}
        <div class='flex flex-col bg-black overflow-y-scroll pl-16 p-4 h-full mb-20'>
          {#each data.chapters as course, cIdx (course.chapterID)}
            <div class='flex flex-row justify-between bg-white mb-2 py-2 px-1 place-content-center'>
              {course.chapterID}. {course.chapterName}
              <button class='pr-3' on:click={() => {course.open = !course.open;}}>
                {course.open ? 'v' : '>'}
              </button>
            </div>
            {#if course.open}
              <div class='pl-5 pr-2 pb-5 my-2'>
                {#each data.sections[cIdx] as section, sIdx (sIdx)}
                  <div class='text-tertiary-400 pl-4 p-1 border-b-2 border-tertiary-800'>
                    <a href='{getHref(section.sectionID)}'>{section.chapterID}.{sIdx + 1}. {section.sectionName}
                  </div>
                {/each}
              </div>
            {/if}
          {/each}
        </div>
      {/if}
    </div>
  {/if}
  <slot />
</div>

<style>
  .open {
    width: 20rem;
  }
</style>