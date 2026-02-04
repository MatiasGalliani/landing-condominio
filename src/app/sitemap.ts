import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://creditplan.it';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  
  return [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          it: siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/finanziamenti-condomini`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/ristrutturazioni`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/efficienza-energetica`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}

