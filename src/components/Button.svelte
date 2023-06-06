<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let text: string;
  export let className: string;

  const handleClick = () => {
    dispatch("click");
  };
</script>

<button
  class={`${className} block w-full rounded-lg bg-darkSlate py-4 font-bold text-white`}
  on:click={handleClick}>{text}</button
>
