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
            <button><font-awesome-icon icon="fa-solid fa-arrow-left" /></button>
            <button><font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
        </div>
        <button class="square-button top">
            <font-awesome-icon icon="fa-brands fa-square-pied-piper" />
            <p>Demos</p>
        </button>
        <button class="square-button bottom">
            <p class="price"><span>$</span>39</p>
            <p>On Sale</p>
        </button>

        <div class="container-small">
            <div class="row">
                <div class="col">
                    <img src="../assets/img/image.png" alt="Kindle IMG">
                </div>
                <div class="col">
                    <h4>Latest Book Release</h4>
                    <h5>D. Vaughn Autobiography</h5>
                    <p>Vestibulum tristique turpis in ipsum egestas lobortis. Duis maximus bibendum volutpat. Lorem ipsum
                        dolor sit amet.</p>

                </div>
            </div>
            <div class="row">
                <button class="left"><font-awesome-icon icon="fa-brands fa-amazon" /> <span>Buy On Amazon</span></button>
                <button class="right"><font-awesome-icon icon="fa-brands fa-apple" /> <span>Buy On Appstore</span></button>
            </div>
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
            color: $font-color;
            font-size: 6rem;
            font-weight: 400;

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

        button {
            width: 50px;
            height: 50px;
            background-color: #030303;
            border-radius: 3px;
            border: 1px solid #030303;
            margin: 1px;

            &:hover {
                cursor: pointer;
            }

            .fa-arrow-left,
            .fa-arrow-right {
                color: #ffff;
                font-size: 1rem;
            }
        }
    }

    .square-button {
        width: 65px;
        height: 65px;
        position: absolute;
        border-radius: 5px;
        border: 0;
        font-family: 'DM Sans', sans-serif;

        &:hover {
            cursor: pointer;

        }


        &.top {
            right: 25px;
            top: 125px;
        }

        &.bottom {
            right: 25px;
            top: 200px;

        }

        p {
            font-size: 0.7rem;
            margin: 5px;

            &.price {
                color: #65bc7b;
                font-size: 1.4rem;
                font-weight: 700;
                position: relative;

                span {
                    font-size: 0.9rem;
                    position: absolute;
                    top: 2px;
                    left: 6px;

                }
            }
        }

        .fa-square-pied-piper {
            font-size: 1.8rem;
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

            button {
                width: 275px;
                height: 50px;
                border: 1px solid rgba(61, 166, 152, 0.6);
                box-shadow: inset 25px 25px 5px rgba(143, 238, 225, 0.1),
                    inset -25px -25px 5px rgba(143, 238, 225, 0.1),
                    inset 25px -25px 5px rgba(143, 238, 225, 0.1),
                    inset -25px 25px 5px rgba(143, 238, 225, 0.1);
                background-color: #f5fcfa;


                &:hover {
                    cursor: pointer;
                    box-shadow: inset 25px 25px 5px rgba(143, 238, 225, 0.3),
                        inset -25px -25px 5px rgba(143, 238, 225, 0.3),
                        inset 25px -25px 5px rgba(143, 238, 225, 0.3),
                        inset -25px 25px 5px rgba(143, 238, 225, 0.3);
                    border: 1px solid #3da698;
                }

                span {
                    margin-left: 5px;
                }

                &.left {
                    border-radius: 5px 0 0 5px;

                }

                &.right {
                    border-radius: 0px 5px 5px 0;

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