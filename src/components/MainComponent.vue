<script>
import About from './AboutComponent.vue';
import Logos from './LogosComponent.vue';
import AudioBook from './AudioBookComponent.vue';
import Section4 from './Section4Component.vue';
import Section5 from './Section5Component.vue';
import Section6 from './Section6Component.vue';
import Section7 from './Section7Component.vue';
export default {
    name: 'AppMain',
    components: {
        About,
        Logos,
        AudioBook,
        Section4,
        Section5,
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
    <section>

    </section>
    <section>

    </section>
    <section>

    </section>
    <section>

    </section>
    <section>

    </section>
</template>
<style scoped lang="scss"></style>