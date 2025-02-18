import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/light-font/css/materialdesignicons-light.css';
import { mdil, mdilAliases } from './mdil';

export default createVuetify({
	components,
	directives,
	icons: {
		defaultSet: 'mdil',
		aliases: mdilAliases,
		sets: {
			mdil,
		},
	},
	defaults: {
		global: {
			ripple: false,
		},
	},
});