import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					dark: {
						"900": "#10197A",
						"800": "#1A2793",
						"700": "#1A2793",
						"600": "#3D53DB",
					},
					default: "#546FFF",
					light: {
						"400": "#7E95FF",
						"300": "#98ABFF",
						"200": "#BAC8FF",
						"100": "#DCE4FF",
					},
				},
				success: {
					dark: {
						"900": "#3B6506",
						"800": "#4C7A0B",
						"700": "#659711",
						"600": "#7FB519",
					},
					default: "#9CD323;",
					light: {
						"400": "#BCE455",
						"300": "#D3F178",
						"200": "#E8FAA6",
						"100": "#F5FCD2",
					},
				},
				error: {
					dark: {
						"900": "7A0619",
						"800": "#930B16",
						"700": "#B71112",
						"600": "#DB2719",
					},
					default: "#FF4423",
					light: {
						"400": "#FF7F59",
						"300": "#FFA37A",
						"200": "#FFC8A6",
						"100": "#FFE7D3",
					},
				},
				warning: {
					dark: {
						"900": "#7A4D0B",
						"800": "#936312",
						"700": "#B7821D",
						"600": "#DBA32A",
					},
					default: "#FFC73A",
					light: {
						"400": "#FFD96B",
						"300": "#FFE488",
						"200": "#FFEFB0",
						"100": "#FFF8D7",
					},
				},
				info: {
					dark: {
						"900": "#102E7A",
						"800": "#1A4393",
						"700": "#2A60B7",
						"600": "#3D81DB",
					},
					default: "#54A6FF",
					light: {
						"400": "#7EC2FF",
						"300": "#98D3FF",
						"200": "#BAE5FF",
						"100": "#DCF3FF",
					},
				},
				secondary: {
					dark: {
						"900": "#030410",
						"800": "#060713",
						"700": "#0A0A18",
						"600": "#0E0F1D",
					},
					default: "#141522",
					light: {
						"400": "#54577A",
						"300": "#8E92BC",
						"200": "#C2C6E8",
						"100": "#DFE1F3",
					},
				},
			},
			fontSize: {
				"text-6xl": "72px",
				"text-5xl": "40px",
				"text-4xl": "36px",
				"text-3xl": "32px",
				"text-2xl": "24px",
				"text-xl": "20px",
				"text-lg": "18px",
				"text-base": "16px",
				"text-sm": "14px",
				"text-xs": "12px",
			},
		},
	},
	plugins: [],
};
export default config;
