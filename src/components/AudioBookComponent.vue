<script>
export default {
    name: 'AudioBook'
}
</script>
<template>
    <div class="row">
        <div class="col">
            <div class="photo-container">
                <img src="../assets/img/audible-app-2x-400x418.png" alt="">
            </div>
        </div>
        <div class="col text">
            <h3>New Audiobook</h3>
            <h4>No time to read? No problem. Listen to it</h4>
            <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue cursus.</p>

            <div class="logo-container">
                <div class="logo"><img src="../assets/img/audible-logo.png" alt=""></div>
                <div class="logo"><img src="../assets/img/bn-logo-tall.png" alt=""></div>
                <div class="logo"><img src="../assets/img/kindle-logo-tall.png" alt=""></div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/mixins.scss' as *;
@use '../assets/scss/partials/variables.scss' as *;

.row {
    @include row;
    justify-content: center;
    background-image: url(../assets/img/banner.jpg);
    background-size: cover;
    padding-top: 70px;

    .logo-container {
        display: flex;
    }

    .col {
        padding: 0 40px;

        &.text {
            width: 470px;
            text-align: center;
        }
    }

    h3 {
        font-family: 'DM Serif Display', serif;
        color: #ffff;
        font-size: 2rem;
        word-spacing: 5px;
        margin-top: 130px;

    }

    h4 {
        font-family: 'DM Sans', sans-serif;
        word-spacing: 5px;
        color: $font-color;
        text-transform: uppercase;
        font-size: 0.95rem;
        padding-top: 25px;
        padding-bottom: 30px;

    }

    p {
        font-family: 'DM Sans', sans-serif;
        color: #86888e;
        padding-bottom: 50px;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 0.9rem;

    }


    .photo-container {
        width: 530px;
        height: 528px;
        position: relative;



        img {
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: 0;

        }
    }

    .logo-container {
        img {
            padding: 0 10px;
        }
    }


}
</style>