const express = require('express');
const Router = express.Router();
const fetch = require('node-fetch');
const {
  qsEncode,
  fetchJson
} = require('../fetch-utils');


Router.get('/', (req, res) => {

  const queryParams = qsEncode({
    $limit : 100
  });
  const campaignContributionsEndpoint = 'https://data.hawaii.gov/resource/imub-jfpr.json';
  const url = `${campaignContributionsEndpoint}?${queryParams}`;

  fetch(url)
    .then( fetchJson )
    .then( res.json.bind(res) );
});

module.exports = Router;
