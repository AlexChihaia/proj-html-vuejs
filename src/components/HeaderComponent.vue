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
        <div class="container-big">
            <div class="logo">
                <img src="../assets/img//author-logo-round-200x205.png" alt="Author Logo">
            </div>
            <ul class="navbar">
                <li v-for=" object in navObj">
                    {{ object.page }}

                </li>
            </ul>
        </div>

        <div class="box">
            <h2>Damon Vaugh</h2>
            <h4>Best selling author and the most influential public intellectual in the western world right now.</h4>
            <p>- The new york times</p>
        </div>

        <div class="container-small">
            <div class="row">
                <div class="col"><img src="../assets/img/" alt=""></div>
                <div class="col"></div>
            </div>
            <div class="row"></div>
        </div>
    </header>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/typography.scss' as *;
@use '../assets/scss/partials/variables.scss' as *;

header {
    background-image: url(../assets/img/footer-3.jpg);
    background-size: cover;
    position: relative;


    .logo {
        padding: 0 20px;
    }

    .container-big {
        display: flex;
        justify-content: space-between;
        padding: 0 110px;
    }

    .box {
        padding: 0 230px;
        width: 1180px;

        h2 {
            font-family: 'Kristi', cursive;
            color: $warn-color;

            font-size: 6rem;

        }

        h4 {
            font-family: 'DM Serif Display', serif;
            color: #ffff;
            font-size: 3rem;
        }
    }

    .container-small {
        width: 690px;
        height: 400px;
        position: absolute;
        bottom: 0;
        right: 0;

        .row {
            display: flex;
        }

        /*debug*/
        background-color: #ffff;
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