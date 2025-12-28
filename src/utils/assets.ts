
export const getAssetPath = (path: string) => {
  // 移除开头的斜杠，避免双重斜杠
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // 如果 basePath 存在且不为空，则拼接
  if (basePath) {
    return `${basePath}/${cleanPath}`;
  }
  
  // 本地开发环境直接返回 /cleanPath
  return `/${cleanPath}`;
};
