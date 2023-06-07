export function formatDate(date: string | null): string {
  if (!date) return '';

  const newDate = new Date(date);
  const day = String(newDate.getUTCDate()).padStart(2, '0');
  const month = String(newDate.getUTCMonth() + 1).padStart(2, '0');
  const year = String(newDate.getUTCFullYear()).slice(-2);

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
