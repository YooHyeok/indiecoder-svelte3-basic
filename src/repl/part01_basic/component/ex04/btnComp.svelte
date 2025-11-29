<script>
  import LabelComp from "./labelComp.svelte";

  export let count;
  export let handleClick;
</script>

<button on:click={handleClick}>
  클릭수 {count}
  <LabelComp {count} />
</button>
