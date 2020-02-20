export function priceMask(value) {
  let formatValue = value.replace(/\D/g, '');

  formatValue = `R$ ${(formatValue / 100).toFixed(2)}`;

  return formatValue
    .replace(/(\d)(\d{3})(\d{3})/g, '$1.$2.$3,')
    .replace(/(\d)(\d{3})/g, '$1.$2,');
}
