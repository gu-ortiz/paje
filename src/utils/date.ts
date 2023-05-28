export function formatDate(date: string): string {
  const newDate = new Date(date);

  const day = String(newDate.getDate()).padStart(2, '0');
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const year = String(newDate.getFullYear()).slice(-2);

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
