/* eslint-disable no-undef */


export function getData() {
  return localStorage.getItem('brick');
}

export function setData(data) {
  return localStorage.setItem('brick', data);
}

export function clearData() {
  localStorage.removeItem('brick');
}