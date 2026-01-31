<script>
  import Widget from "./Widget.svelte";
</script>

<div>
  <div><h1>Part03_Ex07</h1></div>
  <Widget>
    <h2 slot="header">Hello</h2>
    <!-- <div slot="footer">
      <p>All rights reserved.</p>
      <p>Copyright (c) 2019 Svelte Industries</p>
    </div> -->
    <!-- `svelte:fragment` : 불필요한 DOM 요소를 만들지 않고 슬롯을 사용 -->
    <svelte:fragment slot="footer">
      <p>All rights reserved.</p>
      <p>Copyright (c) 2019 Svelte Industries</p>
    </svelte:fragment>
  </Widget>
</div>
