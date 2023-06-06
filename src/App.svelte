<script lang="ts">
  import "./app.css";
  import IconLi from "./components/IconLi.svelte";

  let width;
</script>

<svelte:window bind:innerWidth={width} />

<main
  class="mx-auto flex h-[100vh] w-[100vw] flex-col font-roboto text-charcoal"
>
  {#if width <= 500}
    <img
      src="./images/illustration-sign-up-mobile.svg"
      alt="sign up illustration"
    />
  {:else}
    <img
      src="./images/illustration-sign-up-desktop.svg"
      alt="sign up illustration"
    />
  {/if}
  <div class="mx-auto mt-10 p-6">
    <h1 class="text-5xl font-bold">Stay updated!</h1>
    <p class="mt-7 text-xl">
      Join 60,000+ product managers receiving monthly updates on:
    </p>
    <ul class="mt-7 flex flex-col gap-4">
      <IconLi>Product discovery and building what matters</IconLi>
      <IconLi>Measuring to ensure updates are a success</IconLi>
      <IconLi>And much more!</IconLi>
    </ul>

    <form action="" class="mt-10">
      <label>
        <p class="text-sm font-bold">Email address</p>
        <input
          class="mt-2 block w-full rounded-lg border border-grey px-6 py-4"
          type="text"
          placeholder="email@company.com"
        />
        <button
          class="mt-6 block w-full rounded-lg bg-darkSlate py-4 font-bold text-white"
          >Subscribe to monthly newsletter</button
        >
      </label>
    </form>
  </div>
</main>
