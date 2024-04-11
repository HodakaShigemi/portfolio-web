import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
// import NextConfig from '@type/next'
// import BundleAnalyzer from '@next/bundle-analyzer'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  output: 'export',
  images: {
    unoptimized: true,
  },
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

/*
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
 
@type {import('next').NextConfig}
 
module.exports = withBundleAnalyzer(nextConfig)
*/

 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
