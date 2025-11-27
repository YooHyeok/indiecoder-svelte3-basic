<script>
  let count = 0;
  $: doubled = count * 2;
  $: if (count >= 10) {
    alert("카운트가 10을 넘었습니다. ");
    count = 9;
  }

  $: {
    console.log(count);
    console.log(doubled);
  }

  function handleClick() {
    // 이벤트 코드
    count += 1;
  }
</script>

<div>
  <div><h2>Ex02</h2></div>
  <button on:click={handleClick}>
    클릭수 {count}
    {count === 1 ? "time" : "times"}
  </button>
  <p>{count} 두배는 {doubled}</p>
</div>
