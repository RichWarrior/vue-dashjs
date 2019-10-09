//Components
import toolbar from '@/components/toolbar';
import sidebar from '@/components/sidebar';
import footer from '@/components/footer';

//Layouts
import authorizelayout from '@/layouts/authorizeLayout';
import blanklayout from '@/layouts/blankLayout';
import unauthorizelayout from '@/layouts/unauthorizeLayout';

//Plugins
import VueSweetalert2 from 'vue-sweetalert2';
import moment from 'moment';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';

function setupComponents(Vue){
    //Defined Components
    Vue.component('dashjs-toolbar',toolbar);
    Vue.component('dashjs-sidebar',sidebar);
    Vue.component('dashjs-footer',footer);

    //Defined Layouts
    Vue.component('dashjs-authorize',authorizelayout);
    Vue.component('dashjs-unauthorize',unauthorizelayout);
    Vue.component('dashjs-blank',blanklayout);

    Vue.use(VueSweetalert2)

    Vue.use(require('vue-moment'));
    Vue.prototype.moment = moment
    moment.locale('tr')
    
    Vue.use(VueToast)
}

export {
    setupComponents
}