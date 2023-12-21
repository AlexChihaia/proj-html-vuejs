<script>
import About from './AboutComponent.vue';
import Logos from './LogosComponent.vue';
import AudioBook from './AudioBookComponent.vue';
import ButtonRow from './ButtonRowComponent.vue';
import RoundCard from './RoundCardComponent.vue';
import Testimonials from './TestimonialsComponent.vue';
import Events from './EventsComponent.vue';
import Subscribe from './SubscribeComponent.vue'
export default {
    name: 'AppMain',
    components: {
        About,
        Logos,
        AudioBook,
        ButtonRow,
        RoundCard,
        Testimonials,
        Events,
        Subscribe,
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
    <section class="center rose padding">
        <Events />
    </section>
    <Subscribe />
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

.rose {
    background-color: #f3ece3;

    &.padding {
        padding-top: 75px;
        padding-bottom: 90px;
    }
}

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