// Example posts for the blog in English. Add more objects for more articles.
const posts = [
  {
    slug: 'wordpress-6-8-2-maintenance-release',
    translationSlug: 'wordpress-6-8-2-version-mantenimiento',
    title: 'WordPress 6.8.2: New Maintenance and Security Release',
    description: 'Discover the new features and fixes in the latest WordPress 6.8.2 maintenance release and why you should update.',
    date: '2025-07-15',
    cover: 'https://images.unsplash.com/photo-1559854036-2409f22a918a?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'text', value: 'WordPress has just released version 6.8.2, a maintenance update that includes important bug fixes and security improvements. If you manage a WordPress site, staying up-to-date with these updates is essential to ensure your website\'s performance and security.' },
      { type: 'subtitle', value: 'What\'s included in WordPress 6.8.2?' },
      { type: 'text', value: 'This minor version includes fixes for 20 Core tickets and 15 Block Editor issues. Among the improvements are:' },
      { type: 'text', value: '- Security patches for detected vulnerabilities\n- Performance improvements in the Gutenberg editor\n- Fixes for REST API bugs\n- Solutions for PHP 8.2 compatibility issues' },
      { type: 'subtitle', value: 'Automatic Update' },
      { type: 'text', value: 'If your site has automatic background updates enabled, the update process will begin automatically. Otherwise, you can download WordPress 6.8.2 from WordPress.org or visit your WordPress Dashboard, click "Updates", and then click "Update Now".' },
      { type: 'subtitle', value: 'End of Security Updates for Older Versions' },
      { type: 'text', value: 'Along with this release, WordPress has announced that branches 4.1 to 4.6 have received their final update. These versions will no longer receive any security updates in the future, making it even more important to keep your WordPress updated to a recent version.' },
      { type: 'code', value: '// Check your current WordPress version\necho get_bloginfo("version");' },
      { type: 'subtitle', value: 'Why You Should Update' },
      { type: 'text', value: 'Keeping WordPress updated is crucial for several reasons:' },
      { type: 'text', value: '1. Security: Maintenance updates often include patches for security vulnerabilities.\n2. Performance: Each version usually includes performance improvements and optimizations.\n3. Compatibility: Updates ensure your site remains compatible with the latest plugins and themes.\n4. Support: Older versions eventually stop receiving support and security updates.' },
      { type: 'subtitle', value: 'WordPress 6.8.2 Contributors' },
      { type: 'text', value: 'This version was led by Jb Audras, Estela Rueda, and Zunaid Amin, with the help of over 90 contributors from the WordPress community. Their asynchronous coordination to deliver maintenance fixes in a stable release is a testament to the power and capability of the WordPress community.' },
      { type: 'subtitle', value: 'Update Recommendations' },
      { type: 'text', value: '- Make a complete backup before updating\n- Check the compatibility of your plugins and themes\n- Update in a test environment first if possible\n- Review your site after the update to detect any potential issues' },
      { type: 'text', value: 'Have you already updated to WordPress 6.8.2? Share your experience in the comments and help other users keep their sites secure and up-to-date.' }
    ]
  },
  {
    slug: 'seo-trends-for-developers',
    translationSlug: 'tendencias-seo-para-desarrolladores',
    title: 'SEO Trends for Developers',
    description: 'The key technical SEO tips every dev should know to stand out on Google in 2025.',
    date: '2025-06-17',
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'text', value: 'Technical SEO is fundamental in modern projects. Google prioritizes speed, accessibility, and semantic structure.' },
      { type: 'subtitle', value: 'Key Tips' },
      { type: 'text', value: '1. Use semantic HTML5 tags.\n2. Optimize images and assets.\n3. Implement OpenGraph and meta tags.' },
      { type: 'code', value: '<meta name="description" content="Your description here" />' },
      { type: 'text', value: 'The future of SEO belongs to those who master technology.' }
    ]
  },
  // --- NEW WORDPRESS & PHP 8.2 POSTS ---
  {
    slug: 'improve-wordpress-security-2025',
    translationSlug: 'mejorar-seguridad-wordpress-2025',
    title: 'How to Improve Your WordPress Security in 2025',
    description: 'Advanced and updated guide to protect your WordPress site against modern threats, plugins, and cyberattacks.',
    date: '2025-06-17',
    cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'text', value: 'Did you know that over 40% of the world’s websites use WordPress? This popularity makes it a frequent target for hackers and bots. If you own or manage a WordPress site, protecting it is not optional: it’s essential for your reputation, SEO, and your visitors’ trust.' },
      { type: 'subtitle', value: 'Why is WordPress Security So Important?' },
      { type: 'text', value: 'A compromised site can lose Google ranking, be penalized, send spam, or even go offline. Attacks evolve every year: in 2025, phishing, plugin exploits, and brute force attacks are more sophisticated than ever.' },
      { type: 'subtitle', value: 'WordPress Security Checklist 2025' },
      { type: 'text', value: '1. Always keep WordPress, plugins, and themes updated to avoid known vulnerabilities.\n2. Use strong passwords and enable two-factor authentication (2FA) for all users.\n3. Install only trusted plugins and themes; remove those you don’t use.\n4. Limit login attempts and change the login URL if possible.' },
      { type: 'subtitle', value: 'Force HTTPS and Protect the Admin Panel' },
      { type: 'code', value: "define('FORCE_SSL_ADMIN', true);" },
      { type: 'text', value: 'This snippet in your wp-config.php forces all admin access to use HTTPS, protecting your credentials and data.' },
      { type: 'subtitle', value: 'Recommended Security Plugins' },
      { type: 'text', value: '- Wordfence Security: firewall and malware scanning.\n- iThemes Security: hardens settings and blocks common attacks.\n- UpdraftPlus: automatic backups and easy restore.' },
      { type: 'subtitle', value: 'SEO Tips: Security Also Ranks' },
      { type: 'text', value: 'Google prioritizes secure sites (HTTPS, no malware, no spam). A hacked site can be delisted. Keeping your WordPress secure is key for your ranking and online reputation.' },
      { type: 'subtitle', value: 'Questions or Want More Tips?' },
      { type: 'text', value: 'Leave your comment below or share this article on social media if you found it useful. Protect your WordPress and help others do the same!' }
    ]
  },
  {
    slug: 'php-8-2-in-wordpress',
    translationSlug: 'php-8-2-en-wordpress',
    title: 'What Does PHP 8.2 Bring to WordPress? New Features and Compatibility',
    description: 'Discover all the advantages of using PHP 8.2 in WordPress, how to upgrade safely, and what to consider for SEO and plugins.',
    date: '2025-06-17',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'text', value: 'Is it worth upgrading WordPress to PHP 8.2? Absolutely! PHP 8.2 is the most modern and secure version, bringing improvements that can speed up and protect your site. But there are key details to avoid errors and get the most out of it.' },
      { type: 'subtitle', value: 'Why Upgrade to PHP 8.2 in WordPress?' },
      { type: 'text', value: 'PHP 8.2 offers superior performance: your site loads faster, uses fewer resources, and is more secure against attacks. Many old and vulnerable functions have been removed, reducing risks.' },
      { type: 'subtitle', value: 'Main New Features of PHP 8.2 for WordPress Developers' },
      { type: 'text', value: '- Readonly types: ideal for immutable configuration data.\n- Improvements in enums, new functions, and clearer syntax.\n- Deprecation of insecure functions and better error handling.' },
      { type: 'subtitle', value: 'Practical Example: Readonly Properties in PHP 8.2' },
      { type: 'code', value: 'class Config {\n    public readonly string $site_url;\n    public function __construct($url) {\n        $this->site_url = $url;\n    }\n}' },
      { type: 'text', value: 'This helps prevent accidental changes to your site’s configuration.' },
      { type: 'subtitle', value: 'How to Upgrade WordPress to PHP 8.2 Safely' },
      { type: 'text', value: '1. Make a full backup of your site and database.\n2. Test the upgrade in a staging environment before applying it to production.\n3. Update all plugins and themes to their latest versions.\n4. Use plugins like PHP Compatibility Checker to detect possible incompatibilities.' },
      { type: 'subtitle', value: 'SEO: Does PHP 8.2 Improve Ranking?' },
      { type: 'text', value: 'Yes! Google values speed and security. A fast, secure WordPress helps improve Core Web Vitals and reduces the risk of penalties.' },
      { type: 'subtitle', value: 'Questions About PHP 8.2 in WordPress?' },
      { type: 'text', value: 'Leave your comment or share your experience. Let’s help the community move forward with modern technology!' }
    ]
  },
  {
    slug: 'best-wordpress-plugins-2025',
    title: 'The Best WordPress Plugins for 2025',
    description: 'Discover the definitive list of must-have WordPress plugins this year, with usage tips, SEO, and security.',
    date: '2025-06-17',
    cover: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'text', value: 'Want to boost your WordPress site but don’t know which plugins to choose? In 2025, the choices are huge, but only a few really make a difference in SEO, speed, and security. Here’s a proven selection and tips to get the most out of them.' },
      { type: 'subtitle', value: 'Must-Have WordPress Plugins for 2025' },
      { type: 'text', value: '1. Yoast SEO: the favorite for optimizing titles, meta descriptions, and sitemaps.\n2. WP Rocket: speeds up loading, improves caching, and helps pass Google’s Core Web Vitals.\n3. Wordfence Security: protects your site from attacks and malware with firewall and automatic scanning.\n4. Elementor: the most flexible visual builder to create stunning pages without coding.' },
      { type: 'subtitle', value: 'How to Choose Plugins Without Hurting Performance' },
      { type: 'text', value: 'Only install the plugins you really need. Check ratings, updates, and compatibility with your WordPress and PHP version. Uninstall those you don’t use and avoid duplicate features.' },
      { type: 'subtitle', value: 'SEO & Plugins: Allies for Ranking' },
      { type: 'text', value: 'A poorly configured plugin can hurt your SEO. Set up Yoast SEO properly, optimize images, and use caching plugins to improve speed—a key factor for Google.' },
      { type: 'subtitle', value: 'Want to Recommend Your Favorite Plugin?' },
      { type: 'text', value: 'Leave it in the comments or share this article! Let’s help more users build quality sites.' }
    ]
  }
];

export default posts;
