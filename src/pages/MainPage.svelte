<script lang="ts">
  import { z } from "zod";

  import Button from "../components/Button.svelte";
  import IconLi from "../components/IconLi.svelte";

  export let width: number;
  export let submitted;

  let email = "";
  let isValid = true;

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const emailSchema = z.string().email();
    try {
      emailSchema.parse(email);
      submitted = true;
    } catch (err) {
      isValid = false;
    }
  };
</script>

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

  <form on:submit={handleSubmit} class="mt-10">
    <label>
      <div class="flex justify-between">
        <p class="text-sm font-bold">Email address</p>
        {#if !isValid}
          <p class="text-sm font-bold text-tomato">Valid email required</p>
        {/if}
      </div>
      <input
        class={`${
          isValid ? "" : "border-tomato bg-tomato/20 text-tomato"
        } mt-2 block w-full rounded-lg border border-grey px-6 py-4`}
        type="text"
        on:focus={() => (isValid = true)}
        bind:value={email}
        placeholder="email@company.com"
      />
      <Button className="mt-5" text="Subscribe to monthly newsletter" />
    </label>
  </form>
</div>
