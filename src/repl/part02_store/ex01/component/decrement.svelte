<script>
  import { count } from "../store.js";

  const onDecre = () => {
    $count = $count - 1;
  };
</script>

<button on:click={onDecre}>-</button>
