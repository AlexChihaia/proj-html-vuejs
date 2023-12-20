<script>
export default {
    name: 'About'
}
</script>
<template>
    <div class="row">
        <div class="col">
            <h3>More About Damon Vaughn</h3>
            <p>Damon Vaughn is a professor of psychology at the University of Toronto, a clinical psychologist and the
                author of
                the multi-milion copy bestseller "The story of my life." </p>
            <div>
                <button>Meet the author</button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/mixins.scss' as *;
@use '../assets/scss/partials/variables.scss' as *;

.row {
    height: 545px;
    @include row;
    justify-content: center;
    align-items: center;

    .col {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 1300px;

        text-align: center;

        h3 {
            font-family: 'Kristi', cursive;
            color: $font-color;
            font-size: 4rem;
            font-weight: 400
        }

        p {
            font-family: 'DM Sans', sans-serif;
            color: #030303;
            font-size: 1.6rem;
            word-spacing: 5px;
            margin: 30px 0;
        }
    }
}

button {
    @include button;
    background-color: $success-color;
    padding: 10px 25px;
    margin-top: 30px;

    &:hover {
        background-color: #245f56;
    }
}
</style>