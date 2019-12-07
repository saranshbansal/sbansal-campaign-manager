export const scrolledToBottom = () => {
  const windowHeight =
    "innerHeight" in window
      ? window.innerHeight
      : document.documentElement.offsetHeight;

  const body = document.body;
  const html = document.documentElement;
  const docHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  const windowBottom = windowHeight + window.pageYOffset;

  return windowBottom >= docHeight - 1;
};

export const dateDiffIndays = (dt1, dt2) => {
  return Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
  );
};
