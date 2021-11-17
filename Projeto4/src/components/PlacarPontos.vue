<template>
    <section class="score">
        Jogador <span>{{placar[0]}}</span> x <span>{{placar[1]}}</span> Computador
    </section>
</template>
<script>
    export default {
        props: {
            placar: Array
        }
    }
</script>

<style lang="scss">
    section.score {
        border-bottom: 1px solid #000;
        padding: 24px;
        font-size: 18px;

        span {
            padding: 8px;
            font-weight: bold;
            border: 1px solid #000;
        }
    }
</style>