<script>
	import '../app.postcss';
</script>

<div class="flex min-h-screen w-screen flex-col bg-[#1c1b1e] text-white">
	<header>
		<nav class="flex h-16 items-center justify-center gap-4 pl-4">
			<div>
				<a
					class="group bg-gradient-to-br from-pink-500 to-pink-400 bg-clip-text text-2xl font-extrabold text-transparent no-underline hover:underline"
					href="/"
					>Stem<span
						class="block h-0.5 max-w-0 bg-gradient-to-br from-pink-500 to-pink-400 transition-all duration-300 group-hover:max-w-full"
					/>
				</a>
			</div>
			<div>
				<a
					class="group bg-gradient-to-br from-cyan-600 to-cyan-400 bg-clip-text text-2xl font-extrabold text-transparent"
					href="/about"
					>Stats<span
						class="block h-0.5 max-w-0 bg-gradient-to-br from-cyan-600 to-cyan-400 transition-all duration-300 group-hover:max-w-full"
					/></a
				>
			</div>
		</nav>
	</header>
	<slot />
</div>
