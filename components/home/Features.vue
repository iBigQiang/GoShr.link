<script setup>
import { AreaChart, Hourglass, Link, Paintbrush, ServerOff, Sparkles } from 'lucide-vue-next'

const features = ref([
  {
    title: 'URL 缩短',
    description:
          '将 URL 压缩到最小长度。',
    icon: Link,
  },
  {
    title: '分析',
    description:
          '监控链接，分析并收集有洞察力的统计数据。',
    icon: AreaChart,
  },
  {
    title: '无服务器',
    description:
          '无需传统服务器即可部署。',
    icon: ServerOff,
  },
  {
    title: '可定制 Slug',
    description:
          '支持个性化slugs和大小写敏感度。',
    icon: Paintbrush,
  },
  {
    title: 'AI Slug',
    description:
          '利用人工智能生成 slug。',
    icon: Sparkles,
  },
  {
    title: '链接期限',
    description:
          '为链接设置有效期。',
    icon: Hourglass,
  },
])
</script>

<template>
  <main class="pt-16 md:py-12">
    <div class="md:pb-12">
      <h2 class="text-4xl font-bold lg:text-5xl lg:tracking-tight">
        功能特点
      </h2>
      <p class="my-8 text-lg md:mb-0 text-slate-600">
        功能简单而充分！
      </p>
    </div>

    <div class="grid gap-8 md:gap-16 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="item in features"
        :key="item.title"
        class="flex items-start gap-4"
      >
        <div class="w-8 h-8 p-2 mt-1 bg-black rounded-full shrink-0">
          <component
            :is="item.icon"
            class="w-4 h-4 text-white"
          />
        </div>
        <div>
          <h3 class="text-lg font-semibold">
            {{ item.title }}
          </h3>
          <p class="mt-2 leading-relaxed text-slate-500">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
