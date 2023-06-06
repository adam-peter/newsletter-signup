<script>
  import Button from "../components/Button.svelte";

  export let submitted;
</script>

<div class="flex flex-col items-start p-8">
  <img src="/images/icon-success.svg" alt="success icon" class="mt-32"/>
  <h1 class="mt-10 text-4xl font-bold">Thanks for subscribing!</h1>
  <p class="mt-5">
    A confirmation email has been sent to <span class="font-bold"
      >{"email"}</span
    >. Please open it and click the button inside to confirm your subscription.
  </p>
  <Button on:click={() => submitted = !submitted} text="Dismiss message" className="mt-10"/>
</div>
