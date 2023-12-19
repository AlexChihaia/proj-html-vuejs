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
                    page: ''
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
                <li v-for=" (object, index) in navObj">
                    <a href="#">
                        {{ object.page }}
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" v-if="index === navObj.length - 1" />
                    </a>


                </li>
            </ul>
        </div>

        <div class="box">
            <h2>Damon Vaughn</h2>
            <h4>Best selling author and the most influential public intellectual in the western world right now.</h4>
            <p>- The new york times</p>
        </div>

        <div class="container-small">
            <div class="row">
                <div class="col">
                    <img src="../assets/img/image.svg" alt="Kindle IMG">
                </div>
                <div class="col">
                    <h4>Latest Book Release</h4>
                    <h5>D. Vaughn Autobiography</h5>
                    <p>Vestibulum tristique turpis in ipsum egestas lobortis. Duis maximus bibendum volutpat. Lorem ipsum
                        dolor sit amet.</p>

                </div>
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
            font-size: 2.6rem;
        }

        p {
            color: $dark-font-color;
            font-size: 1.5rem;
            padding: 40px 0;
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
            padding: 0 70px;

            .col {
                margin-top: 55px;

                h4 {
                    font-size: 2rem;
                    padding: 20px 0;
                }

                h5 {
                    color: $font-color;
                    text-transform: uppercase;
                    font-size: 1rem;
                }

                p {
                    font-size: 1rem;
                    word-spacing: 0.6rem;
                    padding: 25px 0;
                    color: $dark-font-color;
                }
            }
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