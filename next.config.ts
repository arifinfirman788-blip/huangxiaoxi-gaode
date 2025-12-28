import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
// 检测是否为 Vercel 环境
const isVercel = process.env.VERCEL === '1';
const repoName = 'huangxiaoxi-gaode'; 

// 只有在生产环境且非 Vercel (即假设为 GitHub Pages) 时才使用 basePath
const shouldUseBasePath = isProd && !isVercel;

const nextConfig: NextConfig = {
  output: 'export',
  basePath: shouldUseBasePath ? `/${repoName}` : '',
  assetPrefix: shouldUseBasePath ? `/${repoName}` : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: shouldUseBasePath ? `/${repoName}` : '',
  },
};

export default nextConfig;
