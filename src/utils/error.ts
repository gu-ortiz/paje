export function getError(status: string): string {
  switch (status) {
    case '404':
      return 'Nosso servidor está fora do ar';
    case '429':
      return 'Nosso servidor está sobrecarregado';
    case '502':
      return 'Nosso servidor está fora do ar';
    case '503':
      return 'Nosso servidor está fora do ar';
    default:
      return 'Algo deu errado';
  }
}
