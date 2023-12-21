<script>
export default {
    name: 'Deeper'
}
</script>
<template>
    <h3>Dig A Little Deeper Into Damon Vaughn</h3>
    <h4>Find out more about the author himself</h4>
    <div class="row m">
        <div class="border-card about">
            <h4>About Me</h4>
            <hr>
            <h5>Vestibulum ante ipsum primis</h5>
        </div>
        <div class="border-card latest">
            <h4>My Latest Book</h4>
            <hr>
            <h5>Vestibulum ante ipsum primis</h5>
        </div>
        <div class="border-card signing">
            <h4>Book Signing</h4>
            <hr>
            <h5>Vestibulum ante ipsum primis</h5>
        </div>
    </div>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/mixins.scss' as *;
@use '../assets/scss/partials/variables.scss' as *;

h3 {
    font-family: 'DM Serif Display', serif;
    font-size: 2rem;
    word-spacing: 3px;
    font-weight: 500;
    padding-top: 75px;
}

h4 {
    font-family: 'DM Sans', sans-serif;
    text-transform: uppercase;
    color: $success-color;
    padding-top: 25px;
    padding-bottom: 35px;
}

.row {
    text-align: center;
    @include row;
    justify-content: space-between;
    gap: 55px;
    padding-bottom: 110px;

    .border-card {
        @include border-card;
        width: calc(100%/3);
        padding-top: 385px;
        padding-bottom: 45px;
        background-size: cover;

        h4 {
            font-family: 'DM Sans', sans-serif;
            font-size: 1.5rem;
            word-spacing: 3px;
            font-weight: 600;
            padding-bottom: 0;
            padding-top: 0;
        }

        h5 {
            font-family: 'DM Sans', sans-serif;
            text-transform: uppercase;
            color: $font-color;
            padding-top: 25px;
            padding-bottom: 0;
        }

        hr {
            margin-left: 175px;
            margin-right: 175px;
            padding: 1px;
            background-color: #838383;
            border: 0;
            margin-top: 20px;
        }

        &.about {
            background-image: url(../assets/img/box-1.jpg);
        }

        &.latest {
            background-image: url(../assets/img/box-4.jpg);
        }

        &.signing {
            background-image: url(../assets/img/box-3.jpg);
        }
    }
}
</style>