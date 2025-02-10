export default defineAppConfig({
  title: 'GoShr.link',
  email: 'ibigqiang@gmail.com',
  github: 'https://github.com/ccbikai/Sink',
  twitter: 'https://x.com/iBigQiang',
  telegram: 'https://goshr.link/telegram',
  mastodon: 'https://goshr.link/x',
  blog: 'https://goshr.link/blog',
  description: '简单、快速、安全的url链接缩短工具，可进行点击量统计分析，100% 免费部署在 Cloudflare 上运行无需传统服务器。',
  image: 'https://goshr.link/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
