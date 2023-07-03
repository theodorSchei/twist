<script>
	import '../app.postcss';
	import Navbar from '../lib/Navbar.svelte';
</script>

<div class="flex min-h-screen w-screen flex-col bg-[#1c1b1e] text-white">
  <Navbar />
	<slot />
</div>
