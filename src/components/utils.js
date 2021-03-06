function isNumber (value) {
  return typeof value === 'number'
}

function isString (value) {
  return typeof value === 'string'
}

function formatPrice (price) {
  if (!isNumber(price)) throw TypeError('[formatPrice]: parameter should be a number')

  return price.toLocaleString('zh', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: 0
  })
}

// 12345 --> 12,345
function decimalNumber (num) {
  if (!isNumber(num)) throw TypeError('[decimalNumber]: parameter should be a number')
  return num.toLocaleString('zh', { style: 'decimal' })
}

/**
 * Convert camel-case to kebab-case
 * @param {String} str
 */
function toKebabCase (str) {
  if (!isString(str)) throw TypeError('[toKebabCase]: Parameter should be a string')
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function percentValue (value) {
  if (typeof value !== 'number') {
    value = parseInt(value)
  }
  return `${(value * 100).toFixed(2)}`.replace(/^-/, '') + '%' // NaN * 100 --> NaN
}

export {
  isNumber,
  formatPrice,
  decimalNumber,
  toKebabCase,
  percentValue
}
