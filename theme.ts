import {
	createSystem,
	defineConfig,
	defineRecipe,
	defaultConfig,
} from '@chakra-ui/react';

const buttonLinkRecipe = defineRecipe({
	variants: {
		appearance: {
			primary: {
				bg: 'brand.green.600',
				color: 'brand.yellow.100',
				_hover: {
					bg: 'brand.green.700',
				},
				fontWeight: 'bold',
			},
			outline: {
				borderColor: 'brand.pink.500',
				color: 'brand.pink.500',
				_hover: {
					bg: 'brand.tan.200',
					color: 'brand.brown.800',
				},
				fontWeight: 'bold',
			},
			ghost: {
				color: 'brand.peach.400',
				_hover: {
					color: 'brand.peach.500',
					textDecoration: 'none',
				},
				_active: {
					color: 'brand.peach.500',
				},
				fontWeight: 'bold',
			},
			secondary: {
				bg: 'brand.peach.400',
				color: 'brand.yellow.100',
				_hover: {
					bg: 'brand.peach.500',
					textDecoration: 'none',
				},
				_active: {
					bg: 'brand.peach.500',
				},
				fontWeight: 'bold',
			},
		},
	},
});

const inputRecipe = defineRecipe({
	variants: {
		appearance: {
			primary: {
				color: 'brand.brown.700',
				bg: 'brand.yellow.100',
				_placeholder: {
					color: 'brand.brown.400',
				},
				focusRingColor: 'brand.pink.500',
				_disabled: {
					bg: 'brand.pink.100',
					color: 'brand.brown.900',
				},
				outlineColor: 'brand.pink.500',
			},
		},
	},
});

const customConfig = defineConfig({
	globalCss: {
		body: {
			bg: 'brand.yellow.50',
			color: 'brand.brown.700',
		},
		h1: {
			fontSize: '4xl',
			fontWeight: 'bold',
		},
		h2: {
			fontSize: '3xl',
			fontWeight: 'bold',
		},
		h3: {
			fontSize: '2xl',
			fontWeight: 'semibold',
		},
		':root': {
			'--header-height': '4rem',
			'--main-height': 'calc(100vh - var(--header-height))',
		},
	},
	theme: {
		tokens: {
			colors: {
				brand: {
					brown: {
						50: { value: '#f7f3f2' },
						100: { value: '#d9c7c3' },
						200: { value: '#bbaaa4' },
						300: { value: '#9c8d85' },
						400: { value: '#7f7066' },
						500: { value: '#44281d' },
						600: { value: '#3b2218' },
						700: { value: '#311c13' },
						800: { value: '#27160e' },
						900: { value: '#1c0f09' },
					},
					peach: {
						50: { value: '#fff6f4' },
						100: { value: '#ffe2d9' },
						200: { value: '#ffc5b3' },
						300: { value: '#ffa88d' },
						400: { value: '#ff8c66' },
						500: { value: '#e4a788' },
						600: { value: '#c69074' },
						700: { value: '#a07a60' },
						800: { value: '#80614c' },
						900: { value: '#604738' },
					},
					yellow: {
						50: { value: '#fffce6' },
						100: { value: '#fff9b3' },
						200: { value: '#fff580' },
						300: { value: '#fff04d' },
						400: { value: '#ffee1a' },
						500: { value: '#f0e14a' },
						600: { value: '#c0c334' },
						700: { value: '#90921e' },
						800: { value: '#60610a' },
						900: { value: '#303005' },
					},
					green: {
						50: { value: '#f2fff6' },
						100: { value: '#c6f0c0' },
						200: { value: '#99e68a' },
						300: { value: '#6ddc54' },
						400: { value: '#40d21e' },
						500: { value: '#97ce4c' },
						600: { value: '#7fb340' },
						700: { value: '#668a34' },
						800: { value: '#4c7030' },
						900: { value: '#334724' },
					},
					pink: {
						50: { value: '#fff0f8' },
						100: { value: '#ffd7f0' },
						200: { value: '#ffb0e5' },
						300: { value: '#ff89da' },
						400: { value: '#ff62cf' },
						500: { value: '#e89ac7' },
						600: { value: '#c77fb5' },
						700: { value: '#a661a3' },
						800: { value: '#844892' },
						900: { value: '#623380' },
					},
				},
			},
			fonts: {
				heading: { value: "'Roboto Slab', serif" },
				body: { value: "'Open Sans', sans-serif" },
			},
		},
		recipes: {
			button: buttonLinkRecipe,
			link: buttonLinkRecipe,
			input: inputRecipe,
		},
	},
});

export default createSystem(defaultConfig, customConfig);
