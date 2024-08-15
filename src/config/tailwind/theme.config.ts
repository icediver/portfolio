import tailwindStandartColors from 'tailwindcss/colors';
const colors = {
	...tailwindStandartColors,
	main: 'var(--main)',
	primary: tailwindStandartColors.purple,
	secondary: tailwindStandartColors.pink,
	logo: 'var(--logo)',
	tag: 'var(--tag)',
	'active-tag': 'var(--active-tag)',
	'hover-tag': 'var(--hover-tag)',
};
export const theme = {
	colors,
	extend: {
		fontSize: {
			xss: '0.625rem',
			xs: '0.7rem',
			sm: '0.82rem',
			base: '1rem',
			lg: '1.15rem',
			xl: '1.25rem',
			'1.5xl': '1.5rem',
			'1.75xl': '1.75rem',
			'2xl': '2rem',
			'3xl': '2.155rem',
			'4xl': '2.58rem',
			'5xl': '3.45rem',
			'6xl': '4.3rem',
			'7xl': '5.17rem',
			'8xl': '6.9rem',
			'9xl': '9.2rem',
		},
		backgroundImage: {
			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			'gradient-conic':
				'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		},
		keyframes: {
			animationOpacity: {
				from: { opacity: '0.2' },
				to: { opacity: '1' },
			},
			scaleIn: {
				'0%': {
					opacity: '0',
					transform: 'scale(0.9)',
				},
				'50%': {
					opacity: '0.3',
				},
				'100%': {
					opacity: '1',
					transform: 'scale(1)',
				},
			},
			width: {
				from: {
					width: '0',
				},
				to: {
					width: '100%',
				},
			},
		},

		animation: {
			opacity: 'animationOpacity 0.7s ease-in-out',
			scaleIn: 'scaleIn .35s ',
			width: 'width 1s ease-in-out',
		},
	},
};
