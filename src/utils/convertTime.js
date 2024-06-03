export const To24 = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  minutes = minutes.substr(-2);
  var readableTime = hours + ":" + minutes;
  return readableTime;
};
