<article class="contact-card">
  <slot name="header">No header was provided</slot>
  <p>Some content between header and footer</p>
  <slot name="footer">No header was provided</slot>
</article>

<style>
  .contact-card {
    width: 300px;
    border: 1px solid #aaa;
    border-radius: 2px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1em;
    margin: 0 auto;
  }
</style>
