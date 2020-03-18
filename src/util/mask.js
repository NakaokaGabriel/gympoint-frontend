export function priceMask(value) {
  let formatValue = value.replace(/\D/g, '');

  formatValue = `R$ ${(formatValue / 100).toFixed(2)}`;

  return formatValue
    .replace(/(\d)(\d{3})(\d{3})/g, '$1.$2.$3')
    .replace(/(\d)(\d{3})/g, '$1.$2');
}

export function durationMask(durationValue) {
  const formatValue = durationValue
    .replace(/\D/g, '')
    .replace(/\d{2}/g, durationValue);

  return formatValue;
}

export function dateMask(value) {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, '$1/$2');
  value = value.replace(/(\d{2})(\d)/, '$1/$2');

  return value;
}

export function ageMask(value) {
  value = value.replace(/\D/g, '');
  value = value.replace(/(d{0-9})/g, '$1');

  return value;
}

export function weightMask(value) {
  value = value.replace(/\D/, '');
  value = (value / 100).toFixed(2);
  return value;
}

export function heightMask(value) {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{1})(\d{2})/g, '$1.$2');

  return value;
}
