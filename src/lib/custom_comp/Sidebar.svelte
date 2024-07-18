<script>
  let open = true;
  let openCourse = true;

  const openSidebar = () => {open = !open};
  const openCourses = () => {openCourse = !openCourse};

  let coursenames = [{open: true, name: '1 we\'re no strangers', refs: ['1.1 ast', '1.2 rickley']}, 
  {open: true, name: '2 to love you know', refs: ['2.1 hi', '2.2 hello', '2.3 mabuhay', '2.4 annyeonghaseyo', '2.5 nihao', '2.6 guten tag']}, 
  {open: true, name: '3 the rules and', refs: ['3.1 never gonna give you up', '3.2 never gonna let you down', '3.3 never gonna run around', '3.4 and desert you']}, 
  {open: true, name: '4 so do i', refs: ['4.1 never gonna make you cry', '4.2 never gonna say goodbye', '4.3 never gonna tell a lie', '4.4 or hurt you', '4.5 dancing', '4.6 singing', '4.7 celebrating', '4.8 up']}]
  
  const baseCss = 'flex flex-col h-full w-16 gap-0 bg-tertiary-700';
  const transitionCss = 'transition ease-out duration-200';
</script>

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
      {#each coursenames as course (course.name)}
        <div class='flex flex-row justify-between bg-white h-12 mb-2 py-2 px-1 place-content-center'>
          {course.name}
          <button class='pr-3' on:click={() => {course.open = !course.open;}}>
            {course.open ? 'v' : '>'}
          </button>
        </div>
        {#if course.open}
          <div class='pl-5 pb-5 my-2'>
            {#each course.refs as ref}
              <div class='text-tertiary-400 pl-4 p-1 border-b-2 border-tertiary-800'>
                {ref}
              </div>
            {/each}
          </div>
        {/if}
      {/each}
    </div>
  {/if}
  <slot />
</div>

<style>
  .open {
    width: 20rem;
  }
</style>