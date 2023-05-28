export function mapTable(id: string | number) {
  switch (id) {
    case '18' || 18:
      return 'diarias-e-taxas';
    case '19' || 19:
      return 'materiais-e-opme';
    case '20' || 20:
      return 'medicamentos';
    case '22' || 22:
      return 'procedimentos';
    default:
      return 'demais-terminologias';
  }
}
