<script>
import About from './AboutComponent.vue';
import Logos from './LogosComponent.vue';
import AudioBook from './AudioBookComponent.vue';
import ButtonRow from './ButtonRowComponent.vue';
import RoundCard from './RoundCardComponent.vue';
import Testimonials from './TestimonialsComponent.vue';
import Section7 from './Section7Component.vue';
export default {
    name: 'AppMain',
    components: {
        About,
        Logos,
        AudioBook,
        ButtonRow,
        RoundCard,
        Testimonials,
        Section7
    },
}
</script>
<template>
    <section>
        <About />
        <Logos />
    </section>
    <section>
        <AudioBook />

    </section>
    <section class="center">
        <ButtonRow />
        <div class="row m">
            <RoundCard />
            <Testimonials />
        </div>
    </section>
    <section class="center">

    </section>
    <section>

    </section>
    <section>

    </section>
    <section>

    </section>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/mixins.scss' as *;
@use '../assets/scss/partials/variables.scss' as *;

.center {
    display: flex;
    align-items: center;
    flex-direction: column
}

.row {
    @include row;

    &.m {
        padding-bottom: 125px;
    }
}
</style>