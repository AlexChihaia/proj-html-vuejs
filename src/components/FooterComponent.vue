<script>
export default {

    name: 'AppFooter',


    data() {
        return {

            footObj: [

                {
                    title: 'About me',
                    subtitle: {
                        lorem: 'Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat',
                    }
                },
                {
                    title: 'Useful links',
                    subtitle: {
                        books: ' Latest Books ',
                        events: ` Upcoming Events`,
                        articles: `  Recent Articles`,
                        enquiries: ` Business Enquiries`,
                        foundation: ` Visit My Foundation`
                    }
                },
                {
                    title: 'Contact info',
                    subtitle: {
                        adress: '63 E Stundebater Street Bolingbrook, IL 60440',
                        phone: 'Phone:(800)000-0000',
                        mobile: 'Mobile:(800)000-0000',
                        mail: 'Email: Info@your-company.com',
                        socialMedia: ''
                    }
                }
            ]
        }
    },

}
</script>
<template>
    <footer>
        <div class="row">
            <div class="logo">
                <img src="../assets/img/author-logo-round-small.png" alt="">
            </div>

            <div class="container">
                <ul v-for="(obj, indexF) in   footObj  " class="col">
                    <h4>{{ obj.title }}</h4>
                    <li v-for="(  link, indexS  ) in   obj.subtitle  ">
                        <span v-if="indexF === 1"><font-awesome-icon icon="fa-solid fa-chevron-right" /></span>
                        <a href="">{{ link }}</a>
                        <span class="special" v-if="indexS === 'socialMedia'">
                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                            <font-awesome-icon icon="fa-brands fa-youtube" />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row bottom">
            <p class="copyright"><font-awesome-icon icon="fa-regular fa-copyright" />Copyright 2012-2020 | Avada Team by
                <a href=""><span>Theme Fusion</span></a> | All rights Reserved | Powered by <a
                    href=""><span>WordPress</span></a>
            </p>
        </div>

    </footer>
</template>
<style scoped lang="scss">
footer {
    height: 515px;
    background-image: url(../assets/img/footer-3.jpg);


    .row {
        display: flex;
        justify-content: space-between;

        &.bottom {
            justify-content: center;
            align-items: center;
            padding-top: 15px;
        }

        .copyright {
            color: #868586;
            text-align: center;

            span {
                color: #ffff;
            }
        }

        .logo {
            margin-top: 60px;
            margin-left: 50px;
        }

        .container {
            display: flex;
            width: 1600px;

            color: #ffff;

            ul {
                padding-left: 15px;

                h4 {
                    font-size: 1.3rem;
                    font-family: 'DM Serif Display', serif;
                    font-weight: 400;
                    padding-bottom: 10px;
                    padding-top: 50px;
                    text-transform: uppercase;
                }

                li {
                    font-family: 'DM Sans', sans-serif;
                    padding: 9px 0;
                    font-size: 0.9rem;

                    .special {
                        font-size: 1rem;

                        .fa-facebook-f,
                        .fa-twitter,
                        .fa-instagram,
                        .fa-linkedin-in,
                        .fa-youtube {
                            margin-right: 10px;
                        }
                    }



                    .fa-chevron-right {
                        font-size: 0.5rem;
                        margin-right: 15px;
                    }
                }
            }
        }

    }

    .col {
        width: 325px;
        height: 300px;
        margin: 55px;
    }
}
</style>