<script>
  import { fade, blur, fly, slide, scale, draw } from "svelte/transition";

  let current = null;
  let visibles = {
    fade: false,
    slide: false,
    blur: false,
    fly: false,
    scale: false,
    inOut: false,
  };

  const changeVisible = (type) => {
    visibles[current] = false;
    if (current == type) {
      current = null;
      return;
    }
    current = type;
    visibles[type] = !visibles[type];
  };
</script>

<div>
  <div><h1>Part04_Ex05 - in/out</h1></div>
  <article class="contact-card">
    <button on:click={() => changeVisible("fade")}>fade</button>
    <button on:click={() => changeVisible("slide")}>slide</button>
    <button on:click={() => changeVisible("blur")}>blur</button>
    <button on:click={() => changeVisible("fly")}>fly</button>
    <button on:click={() => changeVisible("scale")}>scale</button>
    <button on:click={() => changeVisible("inOut")}>in,out</button>

    <br />

    {#if visibles.fade}
      <div transition:fade class="wrap">
        <h1>fade 예제</h1>
      </div>
    {/if}

    {#if visibles.slide}
      <div transition:slide class="wrap">
        <h1>slide 예제</h1>
      </div>
    {/if}

    {#if visibles.blur}
      <div transition:blur={{opacity:100, amount:100}} class="wrap">
        <h1>blur 예제</h1>
      </div>
    {/if}

    {#if visibles.fly}
      <div transition:fly={{x:200, y:100, opacity:100}} class="wrap">
        <h1>fly 예제</h1>
      </div>
    {/if}

    {#if visibles.scale}
      <div transition:scale={{start:200}} class="wrap">
        <h1>scale 예제</h1>
      </div>
    {/if}

    {#if visibles.inOut}
      <div in:fade out:slide={{duration:500}} class="wrap">
        <h1>in, out 예제</h1>
      </div>
    {/if}
  </article>
</div>

<style>
  .wrap {
    padding: 20px;
    background-color: #288edd;
    text-align: center;
  }
</style>
