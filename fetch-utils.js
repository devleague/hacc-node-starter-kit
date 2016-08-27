/*
 * General utils for handling node-fetch results
 */

// custom encoding function, because querystring.encode will encode the $ => %24
const qsEncode = params => Object.keys(params).map( key => `${key}=${encodeURIComponent(params[key])}`).join('&');

// return the json formatted body, or an error message
const fetchJson = response => {
  if( !response.ok ){
    const { status, statusText, url } = response;
    throw { status, statusText, url, body : response.text() };
  }
  return response.json();
};

// respond with proper status code
const fetchError = res => err => res.status(err.status).json(err);

module.exports = {
  qsEncode,
  fetchJson,
  fetchError
};
