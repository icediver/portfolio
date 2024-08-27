/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		APP_URL: process.env.APP_URL,
	},
	// output: "export",
	// experimental: {
	// serverComponentsExternalPackages: ["resend"],
	// },
};

export default nextConfig;
