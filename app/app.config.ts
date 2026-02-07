export default defineAppConfig({
  title: 'GoShr.link',
  github: 'https://github.com/iBigQiang/GoShr.link',
  coffee: 'https://sink.cool/coffee',
  twitter: 'https://goshr.link/x',
  telegram: 'https://goshr.link/telegram',
  description: '简单、快速、安全的url链接缩短工具，可进行点击量统计分析，100% 免费部署在 Cloudflare 上运行无需传统服务器。',
  image: 'https://goshr.link/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
