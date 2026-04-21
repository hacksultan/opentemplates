export const getImgPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (!basePath) {
    return path;
  }

  if (path.startsWith(basePath)) {
    return path;
  }

  return `${basePath}${path}`;
};

export const getDataPath = (path: string): string => {
  if (typeof window !== "undefined") {
    const basePath = window.location.pathname.split("/")[1] || "";
    if (basePath && path.startsWith("/")) {
      return `/${basePath}${path}`;
    }
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (!basePath) {
    return path;
  }

  if (path.startsWith(basePath)) {
    return path;
  }

  return `${basePath}${path}`;
};
