<script>
export default {
    name: 'Events'
}
</script>
<template>
    <h3>Upcoming Events</h3>
    <h4>Meet the author in person</h4>
    <div class="row">
        <div class="card">
            <img src="../assets/img/hero-06-2x.jpg" alt="">
            <div class="text">
                <h5>Open Book: Dialogues</h5>
                <hr>
                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a, Mauris blandit aliquet elit, eget tincidunt
                    nibh

                    pulvinar a nulla.</p>
            </div>
        </div>
        <div class="card">
            <img src="../assets/img/hero-06-2x.jpg" alt="">
            <div class="text">
                <h5>Meet & Greet With Amanda</h5>
                <hr>
                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a, Mauris blandit aliquet elit, eget tincidunt
                    nibh

                    pulvinar a nulla.</p>
            </div>
        </div>
        <div class="card">
            <img src="../assets/img/hero-06-2x.jpg" alt="">
            <div class="text">
                <h5>Chicago Book Signing</h5>
                <hr>
                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a, Mauris blandit aliquet elit, eget tincidunt
                    nibh

                    pulvinar a nulla.</p>
            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/mixins.scss' as *;
@use '../assets/scss/partials/variables.scss' as *;

.row {
    @include row;
    gap: 50px;
}

h3 {
    font-family: 'DM Serif Display', serif;
    font-size: 2rem;
    font-weight: 500;
}

h4 {
    font-family: 'DM Sans', sans-serif;
    text-transform: uppercase;
    color: $font-color;
    padding-top: 25px;
    padding-bottom: 35px;
    font-weight: 600;
}

.card {
    width: 460px;
    text-align: center;
    background-color: #ffff;

    img {
        width: 100%;
    }

    .text {
        padding: 0 35px;
    }

    h5 {
        font-size: 1.5rem;
        padding-top: 40px;
        padding-bottom: 30px;
        font-family: 'DM Sans', sans-serif;
        font-weight: 500;
    }

    p {
        font-size: 1.1rem;
        padding-bottom: 40px;
        padding-top: 20px;
        word-spacing: 3px;
    }


}
</style>