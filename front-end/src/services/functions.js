const formatDate = (date) => {
  const noMagic = 10;
  const d = date.slice(0, noMagic).split('');
  return `${d[8]}${d[9]}/${d[5]}${d[6]}/${d[0]}${d[1]}${d[2]}${d[3]}`;
};

export default formatDate;
