<script>
  import CountComp from "./component/ex04/countComp.svelte";
  import BtnComp from "./component/ex04/btnComp.svelte";

  let count = 0;
  $: doubled = count * 2;
  $: if (count >= 10) {
    alert("카운트가 10을 넘었습니다. ");
    count = 9;
  }

  function handleClick() {
    // 이벤트 코드
    count += 1;
  }
</script>

<div>
  <div><h2>Ex04</h2></div>
  <BtnComp {count} {handleClick} />
  <CountComp {count} {doubled} />
</div>
