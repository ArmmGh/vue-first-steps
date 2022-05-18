import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/routes';

import VButton from '@/components/common/v-button.vue';
import VInput from '@/components/common/v-input.vue';

const app = createApp(App);

app.component('v-button', VButton);
app.component('v-input', VInput);
app.use(router);
app.mount('#app');
