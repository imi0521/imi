import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select ,backtop} from 'element-ui';

Vue.use(Element)
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Select.name, backtop);
