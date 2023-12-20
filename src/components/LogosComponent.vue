<script>
export default {
    name: 'Logos'
}
</script>
<template>
    <div class="row">
        <div class="logo">
            <a href="#"><img src="../assets/img/ebay-logotan-2x-200x66.png" alt=""></a>
        </div>
        <div class="logo">
            <a href="#"><img src="../assets/img/audible-logotan-2x-200x66.png" alt=""></a>
        </div>
        <div class="logo">
            <a href="#"><img src="../assets/img/bb-logotan-2x-200x66.png" alt=""></a>
        </div>
        <div class="logo">
            <a href="#"><img src="../assets/img/kindlefire-logotan-2x-200x66.png" alt=""></a>
        </div>

    </div>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/mixins.scss' as *;
@use '../assets/scss/partials/variables.scss' as *;

.row {
    @include row;
    background-color: #f3ece3;
    justify-content: center;
    padding: 65px 0;

    .logo {
        padding: 0 70px;
    }
}
</style>