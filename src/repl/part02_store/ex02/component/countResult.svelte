<script>
  import { count } from "../store.js";
  let value;
  count.subscribe((state) => (value = state));
</script>

<h2>현재 count는 {value} 입니다.</h2>
