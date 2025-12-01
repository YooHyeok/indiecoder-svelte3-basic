<script>
  import { count } from "../store.js";
  /**
   * count 증가 함수
   * store의 값을 변경하는 가장 기본적인 방법은 store의 값을 변경하고 다시 재할당 시키는것이다.
   * store의 값의 경우 일반적인 상태값과 달리 앞에 `$` 기호를 사용해야 한다.
   * $기호를 붙혀 사용하는 법은 svelte문법이다.
   */
  const onIncre = () => {
    $count = $count + 1;
  };
</script>

<button on:click={onIncre}>+</button>
