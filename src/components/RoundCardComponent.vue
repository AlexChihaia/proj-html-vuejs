<script>
export default {
    name: 'RoundCard'
}
</script>
<template>
    <div class="border-card">
        <h2>Best Author Of His Generation</h2>
        <hr>
        <h4>This book will change your perspective on life</h4>
        <p>Donec fringilla nunc eu turpis dignissim, at eiusmod sapien tincidunt. Maecenas eleifend congue cursus. In vitae
            enim quis sem pharetra. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        <p>Donec rutrum congue leo eget malesuada. vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem
            ut liber. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec
            rutrum congue leo eget malesuada.</p>
        <div class="source">
            <img src="../assets/img/nytimes-logo-white-xsmall.png" alt="NyTimes IMG">
            <span> Justine Kilpatrick, </span>
            <span class="n-paper"> The New York Times </span>
        </div>

    </div>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/mixins.scss' as *;
@use '../assets/scss/partials/variables.scss' as *;

.border-card {
    @include border-card;
    width: 770px;
    background-image: url(../assets/img/testimonial2-2x.jpg);
    background-size: cover;
    background-position-y: 50%;

    padding: 100px;

    h2 {
        padding-bottom: 40px;
        font-family: 'DM Serif Display', serif;
        font-weight: 400;
        font-size: 2.6rem;
    }

    h4 {
        padding-top: 40px;
        padding-bottom: 10px;
        font-family: 'DM Sans', sans-serif;
        font-size: 1.35rem;
        font-weight: 400;
    }

    p {
        color: #ffff;
        padding: 30px 0;
        font-family: 'DM Sans', sans-serif;
        font-size: 1.13rem
    }

    .source {
        line-height: 39px;

        span {
            color: #ffff;

            &.n-paper {
                color: $success-color ;
            }
        }
    }


}
</style>