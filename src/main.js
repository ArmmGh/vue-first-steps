import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/routes';

import VButton from '@/components/common/v-button.vue';
import VInput from '@/components/common/v-input.vue';
import VLoader from '@/components/common/v-loader.vue';
import store from './store';

const app = createApp(App);

app.use(store)
app.use(router);
app.component('v-button', VButton);
app.component('v-input', VInput);
app.component('v-loader', VLoader);
app.mount('#app');
