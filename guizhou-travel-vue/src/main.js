import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import { Button, Card, Icon, Tabbar, TabbarItem, Search, NavBar, Tag, Swipe, SwipeItem, Grid, GridItem } from 'vant'

const app = createApp(App)

app.use(router)
app.use(Button)
app.use(Card)
app.use(Icon)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Search)
app.use(NavBar)
app.use(Tag)
app.use(Swipe)
app.use(SwipeItem)
app.use(Grid)
app.use(GridItem)

app.mount('#app')
