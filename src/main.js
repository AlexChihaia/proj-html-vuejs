import { createApp } from 'vue'
import '/src/assets/scss/style.scss'
import App from './App.vue'

import { library, icon } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faAmazon } from '@fortawesome/free-brands-svg-icons'
import { faSquarePiedPiper } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const chevronRight = icon({ prefix: 'fas', iconName: 'chevronRight' })

/* add icons to the library */
library.add(faCartShopping, faApple, faAmazon, faSquarePiedPiper, faArrowRight, faArrowLeft, faChevronRight, faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn, faCopyright)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
