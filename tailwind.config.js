import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';

const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}',
    join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
  ],
  theme: {
    extend: {}
  },
  plugins: [skeleton({
		themes: { preset: [ "gold-nouveau" ] }
	})
  ]
};