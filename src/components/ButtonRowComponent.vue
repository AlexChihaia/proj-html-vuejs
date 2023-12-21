<script>
export default {
    name: 'ButtonRow'
}
</script>
<template>
    <div class="row m">
        <div class="col">
            <h3>
                What The Critics Say
            </h3>
            <h4>
                testimonials from around the world
            </h4>

        </div>
        <div class="col">
            <button>Read all testimonials</button>
        </div>
    </div>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/mixins.scss' as *;
@use '../assets/scss/partials/variables.scss' as *;

.row {
    @include row;

    justify-content: space-between;
    align-items: center;
    padding-top: 75px;

    h3 {
        font-family: 'DM Serif Display', serif;
        font-size: 2rem;
    }

    h4 {
        font-family: 'DM Sans', sans-serif;
        text-transform: uppercase;
        color: $fountain-blue;
        padding-top: 25px;
        padding-bottom: 35px;
    }
}

button {
    @include button;

    background-color: $font-color;
    padding-left: 40px;
    padding-right: 40px;
}
</style>