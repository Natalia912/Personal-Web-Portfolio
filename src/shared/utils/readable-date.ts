export const readableDate = (date: string | null) => {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  return `${month}/${year}`;
};
