//lemmy.ml/c/linux

const getLocalUrl = (community: { local: boolean; actor_id: string; name: string }) => {
  if (community.local) return `/c/${community.name}`;
  const arr = community.actor_id.split('/');
  return `/c/${arr[4]}@${arr[2]}`;
};

export default getLocalUrl;
