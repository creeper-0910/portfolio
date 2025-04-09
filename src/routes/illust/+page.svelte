<script lang="ts">
	import { Gallery, type ImgType, Modal, Spinner } from 'flowbite-svelte';
	import { onMount } from 'svelte';
  let picList: ImgType[] = [];
  let onClickPicture = false;
  let clickImageData: ImgType;
  onMount(async () => {
    const fetchGallery = await fetch("/api/gallery");
    if(fetchGallery.status !== 200) {
            if(fetchGallery.status !== 304) {
                console.log(fetchGallery.body);
            }
        }
    const parsedGallery = await fetchGallery.json();
    picList = parsedGallery.objects.map((data) => {
      return {
        alt: data.key.split('.').slice(0, -1).join('.'),
        src: `/api/gallery/${data.key}`
      };
    });
  });
  function OpenModal(selectSrc: string,selectAlt: string | undefined) {
    onClickPicture = true;
    clickImageData = {src: selectSrc,alt: selectAlt};
  }
</script>
<svelte:head>
  <meta name="robots" content="noindex">
</svelte:head>
<main>
    <div class="p-8">
        {#if !picList[0]?.hasOwnProperty("src")}
        <div class = "flex justify-center items-center">
            <Spinner color="gray"/>
        </div>
        {/if}
        <Gallery class="gap-2 md:gap-4 grid-cols-2 md:grid-cols-3" items={picList} let:item>
            {#if item}
                <div>
                    <img src={item.src} alt={item.alt}
                    class="w-full h-full aspect-square rounded-lg object-cover hover:shadow-xl hover:brightness-50"
                    on:click={() => (OpenModal(item.src,item.alt))}
                    />
                </div>
            {/if}
        </Gallery>
        {#if clickImageData?.hasOwnProperty("src")}
        <Modal title={clickImageData.alt} bind:open={onClickPicture} autoclose outsideclose>
                <img src={clickImageData.src} alt={clickImageData.alt}
                    class="w-full h-full aspect-square rounded-lg object-scale-down"
                />
        </Modal>
        {/if}
    </div>
</main>