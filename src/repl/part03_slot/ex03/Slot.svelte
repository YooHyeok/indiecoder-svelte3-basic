<script>
  import Card from "./Card.svelte";
</script>

<div>
  <div><h1>Part03_Ex03</h1></div>
  <Card>
    <!-- <span slot="name"> 홍길동 </span> -->
    <span slot="address">
      서울특별시 <br />
      여의도동
    </span>
  </Card>
</div>
