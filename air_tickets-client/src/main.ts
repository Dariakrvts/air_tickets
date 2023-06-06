import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import './assets/main.css'
import { createVuesticEssential, VaButton } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/grid.css'
import 'vuestic-ui/styles/reset.css'
import 'vuestic-ui/styles/typography.css'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/grid.css'
import 'vuestic-ui/styles/reset.css'
import 'vuestic-ui/styles/typography.css'

const app = createApp(App)

app.use(router)


app.use(createVuesticEssential({ components: { VaButton } }));
app.mount('#app')
