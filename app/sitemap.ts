import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://esotericebb.guide'

  const routes = [
    { path: '/', priority: 1.0 },
    { path: '/guides/sphinx-riddle', priority: 0.9 },
    { path: '/guides/star-witness', priority: 0.9 },
    { path: '/guides/stats-and-build', priority: 0.8 },
    { path: '/guides/sleep-and-rest', priority: 0.8 },
    { path: '/guides/mage-hand', priority: 0.8 },
    { path: '/guides/spell-preparation', priority: 0.7 },
    { path: '/guides/companions', priority: 0.7 },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }))
}
