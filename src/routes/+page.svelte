<script lang="ts">
	import { Timeline, TimelineItem } from 'flowbite-svelte';
  const historyList = [
    {title:"生誕",date:"2004年 9月",desc:"生まれました。"},
    {title:"Youtubeアカウントを開設",date:"2017年 4月",desc:"Twitterアカウントの開設前からYoutubeアカウントは存在しました。\n現在は不定期に楽曲のカバーを投稿しています。"},
    {title:"Twitterアカウントを開設",date:"2018年 4月",desc:"稲凪 咲は初め、クリーパー☆ありがてぇという名義で活動を開始しました。謎。"},
    {title:"古明地ソフトに参加",date:"2019年あたり?",desc:"記憶もデータもないですがここらへんだったと思います。懐かしい。"},
    {title:"Milaiに参加",date:"2019年 6月",desc:"Latest OSというHSPで作ったモダンなOSもどきをえすすさんが作っていました。\n更新待ってます。"},
    {title:"Githubアカウントを開設",date:"2019年 10月",desc:"Githubアカウントを開設しました。理由はおそらくReactOS。"},
    {title:"Actlogyへ参加",date:"2020年 5月",desc:"Binary Numberさんが運営する技術系交流とソフトウェア開発を行う\nサークルに参加しました。"},
    {title:"Senraiへ参加",date:"2020年 7月",desc:"古明地ソフトから派生に派生を重ねたグループに参加しました。"},
    {title:"Ablazeへ参加",date:"2021年 9月",desc:"今やなかなかに有名になったAblazeに参加しました。確かFloorp関連で。"},
    {title:"Misskeyアカウント開設",date:"2023年 2月",desc:"Misskeyが流行っていたのでアカウントを開設しました。ごくたまにつぶやきます。"},
    {title:"BlueSkyアカウント開設",date:"2024年 1月",desc:"Twitterくんの雲行きが怪しかったため開設。Twitterが滅びたら移住します。"},
    {title:"成人",date:"2024年 9月",desc:"もうおじいちゃんの気分です。"},
    {title:"人生",date:"継続中",desc:"これからも稲凪 咲の人生は続いていきます..."},
  ]
</script>

<main>
	<div class="flex flex-col items-center justify-center pt-8 text-gray-900 dark:text-white">
		<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
			<div class="flex items-center justify-center">
				<img src="/images/icon.webp" class="max-h-xs w-4/5 max-w-xs rounded-full" />
			</div>
			<div>
				<div class="mb-2 text-2xl md:text-4xl">稲凪 咲の仕事場へようこそ！</div>
        <div class="text-xl md:text-2xl">できること:<br>　プログラミング(少しだけ)<br>　お絵かき(少しだけ)<br>　会話</div>
        <div class="text-xl md:text-2xl">好きなこと:<br>　プログラミング<br>　お絵かき<br>　人の絵を見ること<br>　音楽を聞くこと<br>　ゲーム<br>　読書</div>
			</div>
		</div>

		<Timeline class="m-10 border-white dark:border-gray-800 border-l-2">
      {#each historyList as historyItem}
			<TimelineItem title={historyItem.title} date={historyItem.date} classDiv="dark:bg-gray-700 dark:border-gray-900 bg-primary-500 border-white border-2 mr-1" classTime="text-gray-500">
				<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 break-words whitespace-pre-wrap">
					{historyItem.desc}
				</p>
			</TimelineItem>
      {/each}
		</Timeline>
	</div>
</main>
