export function getError(status: number): string {
  switch (status) {
    case 404:
      return 'Nosso servidor está fora do ar';
    case 429:
      return 'Nosso servidor está sobrecarregado';
    default:
      return 'Algo deu errado';
  }
}