//lemmy.ml/c/linux

const getLocalUrl = (url: string) => {
  const arr = url.split('/');
  return `/c/${arr[4]}@${arr[2]}`;
};

export default getLocalUrl;
