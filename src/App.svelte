<script lang="ts">
  import "./app.css";
  import IconLi from "./components/IconLi.svelte";
  import MainPage from "./pages/MainPage.svelte";
  import Submitted from "./pages/Submitted.svelte";

  let width: number;
  let submitted = false;
</script>

<svelte:window bind:innerWidth={width} />

<main
  class="mx-auto flex h-[100vh] w-[100vw] flex-col font-roboto text-charcoal"
>
  {#if submitted}
    <Submitted bind:submitted/>
  {:else}
    <MainPage width bind:submitted />
  {/if}
</main>
