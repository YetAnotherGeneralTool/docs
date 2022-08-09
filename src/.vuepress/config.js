import {registerComponentsPlugin} from '@vuepress/plugin-register-components';
import {searchPlugin} from '@vuepress/plugin-search';
import {defaultTheme} from '@vuepress/theme-default';
import autoprefixer from 'autoprefixer';
import path from 'path';
import tailwindcss from 'tailwindcss';
import {defineUserConfig} from 'vuepress';

export default defineUserConfig({
	lang: 'en-US',
	title: 'Yet Another General Tools',
	description: 'Just playing around',

	theme: defaultTheme({
		lastUpdated: true,
		editLink: true,
		// editLinkText: 'EDIT ME',
		repo: 'YetAnotherGeneralTool/docs',
		editLinkPattern: ':repo/edit/:branch/:path',
		navbar: [
			{
				text: 'Developer Docs',
				link: '/docs/dev/',
			},
			{
				text: 'Dashboard',
				link: 'https://www.yagt.space/dashboard/',
			},
		],
		sidebar: {
			'/docs/dev/': [
				{
					text: 'Developer Documentation',
					children: [
						'/docs/dev/README.md',
						'/docs/dev/change-log.md',
						'/docs/dev/get-started.md',
						'/docs/dev/resources/README.md',
					],
				},
				{
					text: 'Resources',
					children: [
						'/docs/dev/resources/giveaway/README.md',
						'/docs/dev/resources/user/README.md',
					],
				},
			],
		},
	}),

	plugins: [
		searchPlugin({}),
		registerComponentsPlugin({
			componentsDir: path.resolve(__dirname, './components'),
		}),
	],
	bundlerConfig: {
		viteOptions: {
			css: {
				postcss: {
					plugins: [
						tailwindcss,
						autoprefixer,
					],
				},
			},
		},
	},
});