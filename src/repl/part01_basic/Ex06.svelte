<script>
  let todos = [
    {
      id: 0,
      content: "첫 번째 할일",
      done: false,
    },
    {
      id: 1,
      content: "두 번째 할일",
      done: false,
    },
    {
      id: 2,
      content: "세 번째 할일",
      done: false,
    },
    {
      id: 3,
      content: "네 번째 할일",
      done: false,
    },
  ];
</script>

<div>
  <div><h1>Part01_Ex06</h1></div>
  {#each todos as todo}
    <li>
      <span>{todo.id}</span>
      <span>{todo.content}</span>
      <span>{todo.done}</span>
    </li>
  {/each}
</div>
