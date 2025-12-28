import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'huangxiaoxi-gaode'; // 您的 GitHub 仓库名

const nextConfig: NextConfig = {
  output: 'export',
  // 如果是生产环境（GitHub Pages），设置 basePath
  basePath: isProd ? `/${repoName}` : '',
  // 确保资源路径也加上前缀
  assetPrefix: isProd ? `/${repoName}` : '',
  images: {
    unoptimized: true,
  },
  // 暴露给客户端的环境变量
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
  },
};

export default nextConfig;
