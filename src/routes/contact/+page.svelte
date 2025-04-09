<script lang="ts">
  import { Card, Gallery } from 'flowbite-svelte';
  const contactList = [
    {img:"/images/github-mark.webp",img_b:"/images/github-mark-white.webp",text:"Github",href:"https://github.com/creeper-0910/",desc:"アプリの翻訳等を主に行っています。"},
    {img:"/images/2021 Twitter logo - black.webp",img_b:"/images/2021 Twitter logo - white.webp",text:"Twitter",href:"https://x.com/Riku_2004",desc:"基本的にTwitterで活動しています。"},
    {img:"/images/misskey.webp",text:"Misskey",href:"https://misskey.io/@inagi_saki",desc:"たまに顔を出す程度です。避難用です。"},
    {img:"/images/bluesky_media_kit_logo_transparent_1.webp",text:"Bluesky",href:"https://bsky.app/profile/inagi-saki.bsky.social",desc:"Twitterが滅びた時の移住先。"},
    {img:"https://o-kalan-man.com/favicon.png",text:"応歌ラン公式サイト",href:"https://o-kalan-man.com/",desc:"プロジェクトの運営に携わっています。\n応歌ランをよろしくお願いします。"},
    {img:"https://floorp.app/favicon.ico",text:"Floorp公式サイト",href:"https://floorp.app/",desc:"開発の一部に携わっています。\nぜひご利用ください。"},
    {img:"https://ablaze.one/favicon.ico",text:"Ablaze公式サイト",href:"https://ablaze.one/",desc:"運営に携わっています。"},
    {img:"https://yt3.googleusercontent.com/0HwK7v6SRwqlLBHAdcMTaflBPEv0Is___OlJlfP4ZjfVenojXPA7LU11ftYitA4WkKT0l1VC=s160-c-k-c0x00ffffff-no-rj",text:"稲凪咲のYoutube",href:"https://www.youtube.com/@inagi_saki/",desc:"たまに動画が投稿されます。"},
  ];
</script>

<svelte:head>
  <meta name="robots" content="noindex">
</svelte:head>
<main>
    <div class="p-8 flex justify-center items-center">
        <div class="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-3 max-w-5xl">
            {#each contactList as contactItem}
                <Card href={contactItem.href} class="p-2 sm:p-3">
                    {#if contactItem?.hasOwnProperty("img_b")}
                        <h5 class="text-2xl font-bold tracking-wider text-gray-900 dark:text-white dark:hidden flex items-center">
                            <img src={contactItem.img} class="max-h-[24px] max-w-[24px] mr-3"/>
                            {contactItem.text}
                        </h5>
                        <h5 class="text-2xl font-bold tracking-wider text-gray-900 dark:text-white hidden dark:flex items-center">
                            <img src={contactItem.img_b} class="max-h-[24px] max-w-[24px] mr-3"/>
                            {contactItem.text}
                        </h5>
                    {:else}
                        <h5 class="text-2xl font-bold tracking-wider text-gray-900 dark:text-white flex items-center">
                            <img src={contactItem.img} class="max-h-[24px] max-w-[24px] mr-3"/>
                            {contactItem.text}
                        </h5>
                    {/if}
                    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight whitespace-pre-line">{contactItem.desc}</p>
                </Card>
            {/each}
    </div>
</main>
