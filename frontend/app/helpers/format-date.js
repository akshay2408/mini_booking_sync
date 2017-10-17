import Ember from 'ember';

export function formatDate(params, hash) {
  let date = hash.date;

  if (!date) {
    date = new Date();
  } else {
    date = date;
  }

  let year = date.getFullYear(),
    month = ('0' + (date.getMonth()+1)).slice(-2),
    day = ('0' + (date.getDate())).slice(-2),
    /*hour = ('0' + (date.getHours())).slice(-2),
    min = ('0' + (date.getMinutes())).slice(-2),
    sec = ('0' + (date.getSeconds())).slice(-2),*/
    formatted = `${month}/${day}/${year}`;

  return formatted;
}

export default Ember.Helper.helper(formatDate);