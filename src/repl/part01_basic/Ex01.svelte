<script>
  let count = 0;
  function handleClick() {
    count += 1;
  }
</script>

<div>
  <div><h2>Ex01</h2></div>
  <button on:click={handleClick}>
    클릭수 {count}
  </button>
</div>
