<script>
  import Card from "./Card.svelte";
</script>

<div>
  <div><h1>Part03_Ex02</h1></div>
  <Card>
    <!-- slot의 name속성에 부여한 별칭과 매핑 -->
    <span slot="name"> 홍길동 </span>
    <span slot="address">
      서울특별시 <br />
      여의도동
    </span>
  </Card>
</div>
