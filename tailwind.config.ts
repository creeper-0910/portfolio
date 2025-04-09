import flowbitePlugin from 'flowbite/plugin';

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					'50': '#fbf7f5',
					'100': '#f7ede9',
					'200': '#f1ded7',
					'300': '#e7c5ba',
					'400': '#d7a392',
					'500': '#c27e67',
					'600': '#af6a53',
					'700': '#925743',
					'800': '#7a4a3a',
					'900': '#674235',
					'950': '#362019',
				}
			},
			fontFamily: {
				kanaka: ["Kanaka"]
			}
		}
	},

	plugins: [flowbitePlugin]
} as Config;