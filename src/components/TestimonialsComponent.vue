<script>
export default {
    name: 'Testimonials'
}
</script>
<template>
    <div class="column">
        <div class="card">
            <div class="text">
                <h3>A True Masterpiece, Bravo!</h3>
                <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed,
                    convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero
                    malesuada feugiat</p>
            </div>
            <div class="source">
                <img src="../assets/img/theguardian-xsmall.png" alt="">
                <span class="grey">Gerald Hendley, </span>
                <span>The Guardian</span>
            </div>

        </div>
        <div class="card">
            <div class="text">
                <h3>A unique View On The World</h3>
                <p>Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, prottitor at sem.
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero
                    malesuada feugiat. Vestibulum ac diam sit amet.</p>
            </div>
            <div class="source">
                <img src="../assets/img/globe-xsmall.png" alt="">
                <span class="grey">Mary Maxey, </span>
                <span>The Globe And Mail</span>
            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/mixins.scss' as *;
@use '../assets/scss/partials/variables.scss' as *;

.column {
    width: 505px;
    margin-left: 80px;

    .card {
        margin-bottom: 40px;


        .source {
            padding-top: 10px;

            .grey {
                padding-left: 20px;
                color: #434343;
                font-weight: 600;
            }
        }
    }

    .text {
        width: 100%;
        padding: 60px;
        text-align: center;
        background-color: #f3ece3;

        h3 {
            font-family: 'DM Serif Display', serif;
            padding-bottom: 25px;
            font-weight: 400;
            font-size: 1.5rem;
        }

        p {
            font-family: 'DM Sans', sans-serif;
            word-spacing: 6px;
            color: #434343;
        }
    }
}
</style>