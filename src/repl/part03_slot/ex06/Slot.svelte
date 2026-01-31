<script>
  import Card from "./Card.svelte";
</script>

<div>
  <div><h1>Part03_Ex06</h1></div>
  <!-- Card컴포넌트에서 slot태그를 통해 전달한 hovering 값 수신 -->
  <Card let:hovering>
    <span slot="name"> 홍길동 </span>
    <span slot="address">
      서울특별시 <br />
      여의도동
    </span>
    <span slot="email">
      {#if hovering}
        <h2><b>webdevyoo@gmail.com</b></h2>
      {:else}
        webdevyoo@gmail.com
      {/if}
    </span>
  </Card>
</div>
