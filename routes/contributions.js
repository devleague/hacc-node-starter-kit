const express = require('express');
const Router = express.Router();
const fetch = require('node-fetch');
const {
  qsEncode,
  fetchJson,
  fetchError
} = require('../fetch-utils');


/*
 * Paging enabled, defaults to limit 100
 *   page with query params
 *     limit => Int
 *     offset => Int
 */
Router.get('/', (req, res) => {

  const queryParams = qsEncode({
    $limit : req.query.limit || 100,
    $offset : req.query.offset || 0
  });
  const campaignContributionsEndpoint = 'https://data.hawaii.gov/resource/imub-jfpr.json';
  const url = `${campaignContributionsEndpoint}?${queryParams}`;

  fetch(url)
    .then( fetchJson )
    .then( res.json.bind(res) )
    .catch( fetchError(res) );
});

module.exports = Router;
