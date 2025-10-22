/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://radaios.gr',
    generateRobotsTxt: false, // we already created robots.txt manually
    changefreq: 'weekly',
    priority: 0.7,
    outDir: 'public', // Ensure Netlify serves the files
    trailingSlash: true,

    // TEMP: explicitly list key routes so the sitemap isn't empty.
    // Replace with your actual routes; keep '/' for the homepage.
    additionalPaths: async (config) => [
        await config.transform(config, '/'),
        await config.transform(config, '/about'),
        await config.transform(config, '/blog'),
        await config.transform(config, '/contact'),
        await config.transform(config, '/faq'),
        await config.transform(config, '/privacy-policy'),
        await config.transform(config, '/projects'),
        await config.transform(config, '/reviews'),
        await config.transform(config, '/services'),
        await config.transform(config, '/thank-you'),
    ],
};