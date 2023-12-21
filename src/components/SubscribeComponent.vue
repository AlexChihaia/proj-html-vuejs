<script>
export default {
    name: 'Subscribe'
}
</script>
<template>
    <div class="row">
        <div class="col">
            <h3>Subscribe To My Newsletter</h3>
            <h4>Be notified about book signing tour dates</h4>
            <form action="">
                <input type='text' placeholder="Insert your email ...*">
                <button>Subscribe</button>
            </form>
            <p>Donec fringilla nunc eu turpis dignissim at eiusmod sapien incidunt.</p>

        </div>
    </div>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/mixins.scss' as *;
@use '../assets/scss/partials/variables.scss' as *;

.row {
    @include row;
    justify-content: center;
    background-image: url(../assets/img/banner-2.jpg);
    background-size: cover;

    .col {
        padding: 0 40px;
        text-align: center;
        width: 505px;
    }

    h3 {
        font-family: 'DM Serif Display', serif;
        color: #ffff;
        font-size: 2.5rem;
        word-spacing: 5px;
        padding-top: 120px;
        padding-bottom: 30px;

    }

    h4 {
        font-family: 'DM Sans', sans-serif;
        word-spacing: 5px;
        color: $font-color;
        text-transform: uppercase;
        font-size: 0.95rem;
        padding-bottom: 45px;

    }

    p {
        font-family: 'DM Sans', sans-serif;
        color: #86888e;
        padding-bottom: 140px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 40px;
        font-size: 0.9rem;

    }


    form {
        input {
            width: 290px;
            height: 55px;
            margin-right: 15px;
            border-radius: 5px;
            border: 1px transparent;
            padding-left: 10px;
        }

        button {
            @include button;
            background-color: $success-color;
            padding: 20px 25px;
            margin-top: 30px;

            &:hover {
                background-color: #245f56;
            }
        }
    }
}
</style>