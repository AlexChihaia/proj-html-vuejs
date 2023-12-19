import { createApp } from 'vue'
import '/src/assets/scss/style.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCartShopping)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
