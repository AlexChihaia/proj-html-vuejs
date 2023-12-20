import { createApp } from 'vue'
import '/src/assets/scss/style.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faAmazon } from '@fortawesome/free-brands-svg-icons'
import { faSquarePiedPiper } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faCartShopping, faApple, faAmazon, faSquarePiedPiper, faArrowRight, faArrowLeft)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
