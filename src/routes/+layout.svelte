<script lang="ts">
	import { DarkMode, Footer, FooterCopyright, NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import type { SlideParams } from 'svelte/transition';
	import '../app.css';
	let { children } = $props();
	export const slideParams : SlideParams= {
      delay: 10,
      duration: 250,
      easing: sineIn,
    };
	let date = new Date();
	let year = date.getFullYear();
</script>
<div class="font-kanaka tracking-wide min-h-screen">
<Navbar class="bg-primary-500" let:hidden let:toggle>
	<NavBrand href="/" class="hidden md:flex">
		<img src="/favicon.webp" class="me-2 h-10 sm:h-16" alt="サイトアイコン" />
		<span class="self-center whitespace-nowrap text-xl text-white">咲の仕事場</span>
	  </NavBrand>
	<NavHamburger class="text-white hover:bg-primary-300" on:click={toggle}/>
	<NavBrand href="/" class="md:hidden justify-center">
		<img src="/favicon.webp" class="me-2 h-10 sm:h-16" alt="サイトアイコン" />
		<span class="self-center whitespace-nowrap text-xl text-white">咲の仕事場</span>
	</NavBrand>
	<DarkMode class="text-white hover:bg-primary-300 md:hidden flex"/>
	<NavUl {slideParams} ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium bg-primary-500 border-none dark:bg-gray-800" {hidden}>
	  <NavLi on:click={toggle} class="text-white bg-primary-500 dark:bg-gray-800 hover:bg-primary-300 font-semibold md:hidden" href="/">ホーム</NavLi>
	  <NavLi on:click={toggle} class="text-white bg-primary-500 dark:bg-gray-800 hover:bg-primary-300 font-semibold md:hidden" href="/illust">イラスト</NavLi>
	  <NavLi on:click={toggle} class="text-white bg-primary-500 dark:bg-gray-800 hover:bg-primary-300 font-semibold md:hidden" href="/blog">ブログ</NavLi>
	  <NavLi on:click={toggle} class="text-white bg-primary-500 dark:bg-gray-800 hover:bg-primary-300 font-semibold md:hidden" href="/contact">お問い合わせ</NavLi>
	  <NavLi class="text-white bg-primary-500 dark:bg-gray-800 hover:bg-primary-300 font-semibold hidden md:flex" href="/">ホーム</NavLi>
	  <NavLi class="text-white bg-primary-500 dark:bg-gray-800 hover:bg-primary-300 font-semibold hidden md:flex" href="/illust">イラスト</NavLi>
	  <NavLi class="text-white bg-primary-500 dark:bg-gray-800 hover:bg-primary-300 font-semibold hidden md:flex" href="/blog">ブログ</NavLi>
	  <NavLi class="text-white bg-primary-500 dark:bg-gray-800 hover:bg-primary-300 font-semibold hidden md:flex" href="/contact">お問い合わせ</NavLi>
	</NavUl>
	<DarkMode class="text-white hover:bg-primary-300 hidden md:flex"/>
  </Navbar>
  <!-- <Alert class="m-4 mb-0">
	<span class="font-medium">注意!</span>
	このサイトは構築中です!
</Alert> -->

{@render children()}
</div>
<Footer class="mb-3 ml-5 mr-5 font-kanaka tracking-wide">
	<div class="sm:flex sm:items-end sm:justify-between">
			<FooterCopyright href="/" by="Inagi Saki" year={year} />
			<div class="flex flex-col md:flex-row">
				<a href="https://nullnyat.nca10.moe/"><img alt="nullnyat_banner" src="https://nullnyat.nca10.moe/nullnyat-banner.webp" class="mb-2 mr-2 max-h-14"></a>
				<a href="https://miriel.net"><img alt="miriel_banner" src="https://miriel.net/images/mirielnet.png" class="mb-2 mr-2 max-h-14"></a>
				<a href="https://inagi-saki.work/"><img src="/images/banner.png" alt="咲の仕事場" class="mb-2 mr-2 max-h-14"/></a>
				<div class="text-gray-400">相互リンク募集中です。<br>連絡先からお気軽にお問い合わせください。</div>
			</div>
	</div>
</Footer>