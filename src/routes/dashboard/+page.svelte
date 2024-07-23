<script lang="ts">
    import filterImage from '$lib/assets/filter.png';
    import moduleImage from '$lib/assets/sample_module_pic.jpg';
    import { onDestroy } from 'svelte';
    // import moduleBox from './moduleBox.svelte';
    import { createSearchStore, searchHandler } from '$lib/stores/search';

    export let data;
    let barWidth = 60;

    // Find requirementID based on chapterID
    function getRequirementID(chapterID: number) {
        const section = data.sections.find(sec => sec.chapterID === chapterID);

        if (section) {
            const requirement = data.requirements.find(req => req.sectionID === section.sectionID);
            if (requirement) {
                return requirement.requirementID;
            }
            return "nomatch";
        }
        return "nomatch";
    }

    // Find all sections with the given chapterID
    function getAllTopics(chapterID: number) {
        const sections = data.sections.filter(sec => sec.chapterID === chapterID);
        const numSections = sections.length;
        return numSections;
    }

    const searchChapters = data.chapters.map((chapter) => ({
        ...chapter,
        searchTerms: `${chapter.chapterID} ${chapter.chapterName}`
    }))

    const searchStore = createSearchStore(searchChapters);

    const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

    onDestroy(() => {
        unsubscribe();
    });

</script>

<!-- <div class="outer"> -->
    <!-- <div class="absolute top-0" id="header-container">
        <AppBar>
            <svelte:fragment slot="lead">
                <div class="logo-container">
                    <img src={logo} alt="Logo" style="height: 70px; width: auto;"/>
                </div>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <p class="font-sans text-white">Hi, Jed!</p>
                <div class="circle-placeholder">
                    <img src={avatar} alt="Avatar" class= "rounded-full"/>
                </div>
                <p class="font-sans text-yellow-500 underline">Logout</p>
            </svelte:fragment>
        </AppBar>
    </div> -->

    <div id="body" class="flex-auto w-screen overflow-y-scroll">

        <div class="flex-auto h-[100px] border-4 border-b-slate-400 m-[10px] relative">
            <div class="absolute right-0 inset-y-5">
                <div id="search-input-cont">
                <input type="text" id="search-field" placeholder="Search..." class="text-s rounded-full p-[20px] border-2 border-slate-400 h-[30px]" bind:value={$searchStore.search}/>
                </div>
            </div>

            <div class="absolute left-0 inset-y-5 flex items-center">
                <img src={filterImage} class="h-[30px] mr-2"/><p>Filter by tags</p>
            </div>
        </div>

        <div class="h-[20px]"></div> 

        <div class="grid grid-cols-3 gap-4 m-5"	>
            {#if data.chapters && data.chapters.length}
                <!-- {#each data.chapters as chapter, index (chapter.chapterID)} -->
                {#each $searchStore.filtered as chapter, index (chapter.chapterID)}
                    <a href="/course/{getRequirementID(chapter.chapterID)}"><div id="module-box" class="space-y-[10px] drop-shadow-xl hover:border-[10px]">
                    <div class="bg-gradient-to-t from-yellow-600 via-transparent via-30% relative h-[300px]">
                        <img src={moduleImage} alt="" class="w-full h-full object-cover absolute mix-blend-overlay drop-shadow-xl border-black border-[1.5px]"/>
                        <h1 class="absolute pb-2 inset-x-0 bottom-0 text-white text-2xl font-sans font-bold text-center drop-shadow-xl hover:underline">Module {chapter.chapterID}: {chapter.chapterName}</h1>
                    </div>
                                
                    <p class="text-center">Estimated hrs: {getAllTopics(chapter.chapterID)/2} - {getAllTopics(chapter.chapterID)/2 + 1} | Topics: {getAllTopics(chapter.chapterID)}</p>

                    <div id="progress-container" class="flex-auto pb-4">
                        <div class="grid grid-cols-10 gap-x-[10px]">
                            <div class="col-span-1">
                                <p class="text-xs text-right"> {Math.floor(Math.random() * 100)}%</p>
                            </div>
                            <div class="col-span-9 relative border-2 w-full border-green-400 rounded-full place-self-center h-[10px]">
                                <div class="col-span-9 absolute bottom-0 top-0 left-0 w-3/5 bg-green-400 rounded-full place-self-center h-[10px]"></div>
                            </div>
                        </div>
                    </div>
                </div></a>
                {/each}
            {:else}
                <p>"Nothing here"</p>
            {/if}
        </div>

    </div>
<!-- </div> -->

