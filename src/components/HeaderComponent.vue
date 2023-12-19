<script>
export default {
    name: 'AppHeader',

    data() {
        return {
            navObj: [
                {
                    page: 'Home'
                },
                {
                    page: 'About Me'
                },
                {
                    page: 'Testimonials'
                },
                {
                    page: 'My Blog'
                },
                {
                    page: 'Meetups'
                },
                {
                    page: 'Shop'
                },
                {
                    page: 'Contact Me'
                },
                {
                    page: 'Chart'
                }
            ]
        }
    }
}
</script>
<template>
    <header>
        <div class="logo">
            <img src="../assets/img//author-logo-round-200x205.png" alt="Author Logo">
        </div>
        <ul class="navbar">
            <li v-for=" object in navObj">
                {{ object.page }}

            </li>
        </ul>
    </header>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/typography.scss' as *;

header {
    background-image: url(../assets/img/hero-07-2x.jpg);
    background-size: cover;
    display: flex;
    justify-content: space-between;
    padding: 0 110px;

    .logo {
        padding: 0 20px;
    }

    /*Debug*/
    height: 800px;
}

.navbar {
    display: flex;

    li {
        margin-top: 40px;
        padding: 0 20px;
        color: #ffff;


        font-family: 'DM Sans', sans-serif;
    }
}
</style>