<script >
import AppHeader from './components/HeaderComponent.vue'
import AppMain from './components/MainComponent.vue'
import AppFooter from './components/FooterComponent.vue'

export default {
    components: {
        AppHeader,
        AppMain,
        AppFooter
    }
}
</script>

<template>
    <AppHeader />
    <AppMain />
    <AppFooter />
</template>

<style scoped lang="scss"></style>
