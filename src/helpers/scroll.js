const scroll = () => {
  setTimeout(() => {
    const height = document.documentElement.scrollHeight;
    window.scrollTo({
      top: height,
      behavior: 'smooth',
    });
  }, 100);
};
export default scroll;
