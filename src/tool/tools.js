export const removeUrlSlashSuffix = (pathname) => {
  const lastIndex = pathname.length - 1;
  let trimIndex = lastIndex;
  for (let i = lastIndex; i >= 0; i--) {
    if (pathname.charAt(i) !== '/') {
      trimIndex = i;
      break;
    }
  }
  if (trimIndex === lastIndex) {
    return null;
  }
  return pathname.substring(0, trimIndex + 1);
};
