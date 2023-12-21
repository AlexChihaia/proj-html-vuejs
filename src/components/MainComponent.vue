<script>
import About from './AboutComponent.vue';
import Logos from './LogosComponent.vue';
import AudioBook from './AudioBookComponent.vue';
import ButtonRow from './ButtonRowComponent.vue';
import RoundCard from './RoundCardComponent.vue';
import Section6 from './Section6Component.vue';
import Section7 from './Section7Component.vue';
export default {
    name: 'AppMain',
    components: {
        About,
        Logos,
        AudioBook,
        ButtonRow,
        RoundCard,
        Section6,
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
.center {
    display: flex;
    justify-content: center;
}
</style>