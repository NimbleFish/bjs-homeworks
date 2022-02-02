const valid = data => data < 10 ? "0"+ data : data;

export default function getTime (zone) { return `${valid(new Date().getUTCHours()+zone)}:${valid(new Date().getUTCMinutes())}:${valid(new Date().getUTCSeconds())}` };