export const FormattedTime = () => {
  const now = new Date();
  const formattedTime = now.toLocaleString();
  return formattedTime;
};
