<script>
    import '@picocss/pico'
</script>

<style>
nav{
    background-color: var(--primary);
    height: 2em;
    padding-left: 1rem;
}
a{
    color:white;
    text-decoration: none;
}
</style>

<nav>
    <h4>
        <a href="/">FilteredMoviesV3</a>
    </h4>
</nav>
<div class="container">
    <slot></slot>
</div>
<!-- markup (zero or more items) goes here -->