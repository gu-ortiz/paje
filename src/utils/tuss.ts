export function mapTable(id: string) {
  switch (id) {
    case '18':
      return 'diarias-e-taxas';
    case '19':
      return 'materiais-e-opme';
    case '20':
      return 'medicamentos';
    case '22':
      return 'procedimentos';
    default:
      return 'demais-terminologias';
  }
}
