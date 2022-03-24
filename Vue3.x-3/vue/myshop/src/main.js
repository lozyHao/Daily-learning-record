import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import { Lazyload, Badge, Sidebar, SidebarItem, Collapse, CollapseItem, Tab, Tabs, Card, Tag, Button, Form, Field, CellGroup, Checkbox, CheckboxGroup, SwipeCell, SubmitBar, Stepper, AddressList, AddressEdit,Popup,Grid, GridItem,Image as VanImage,PullRefresh,List   } from 'vant'; //懒加载,徽标

createApp(App).use(Lazyload, {
    loading: require('./assets/images/00.jpg')
}).use(Sidebar).use(SidebarItem).use(Collapse).use(CollapseItem).use(Badge).use(Tab).use(Tabs).use(Card).use(Tag).use(Button).use(Form).use(Field).use(CellGroup).use(Checkbox).use(CheckboxGroup).use(SwipeCell).use(SubmitBar).use(Stepper).use(AddressList).use(AddressEdit).use(Popup).use( Grid).use(GridItem).use(PullRefresh).use(List).use(store).use(router).use(VanImage).mount('#app')
