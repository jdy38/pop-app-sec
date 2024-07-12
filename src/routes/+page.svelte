<script>
    import bg from '$lib/assets/bg.webp';
    let bgStyle = `background-image: url(${bg});`;
</script>


<style>
    .bg-container {
        position: relative;
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }


    .bg-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(219, 215, 215, 0.5);
    }
</style>


<div class="bg-container" style={bgStyle}>
</div>
