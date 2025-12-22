<script>
  import { count } from "../store.js";

  const onDecre = () => {
    count.decrement();
  };
</script>

<button on:click={onDecre}>-</button>
