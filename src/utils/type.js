import isObject from 'lodash-es/isObject'
export function isString(p) {
  return typeof p === 'string'
}
export function isNumber(p) {
  return typeof p === 'number'
}
export function isBoolean(p) {
  return typeof p === 'boolean'
}
export function isUndefined(p) {
  return typeof p === 'undefined'
}
export function isNull(p) {
  return p === null
}
export function isArray(p) {
  return Array.isArray(p)
}
export const toNumber = (number, toFixedNumber = 2) => {
  return isString(number) ? parseFloat(parseFloat(number).toFixed(2)) : number
}
export const toString = (str) => {
  return isNumber(str) ? `${str}` : isObject(str) ? JSON.stringify(str) : str
}
