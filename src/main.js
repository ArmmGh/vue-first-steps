import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/routes';

import VButton from '@/components/common/v-button.vue';
import VInput from '@/components/common/v-input.vue';
import VModal from '@/components/common/v-modal.vue';

const app = createApp(App);

app.component('v-button', VButton);
app.component('v-input', VInput);
app.component('v-modal', VModal);
app.use(router);
app.mount('#app');
