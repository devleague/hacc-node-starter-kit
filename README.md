# HACC Starter Kit

Example accessing API and starter kit for HACC in nodejs

Running this starter kit requires the latest stable version of nodejs

Get the latest stable version by using [n2](https://www.npmjs.com/package/n2)

_the node package name in **n**_

```
npm i -g n
n stable
```

## Demo API

This starter kit is a contrived example of an API using [express](https://www.npmjs.com/package/express) to demonstrate http requests using [node-fetch](https://www.npmjs.com/package/node-fetch) to access the [socrata APIs](https://dev.socrata.com/)

clone (or fork then clone your fork) this starter kit

```
git clone https://github.com/devleague/hacc-node-starter-kit.git
```

navigate into the project directory

```
cd hacc-node-starter-kit
```

install the dependencies

```
npm install
```

run the node application
```
npm start
```

test the application

with curl: `curl localhost:3000/api/contributions`

or in your browser [http://localhost:3000/api/contributions?limit=10](http://localhost:3000/api/contributions?limit=10)

### Tests

DevLeague emphasizes the importance of test driven development.

HACC is a month long hackathon and we believe tests should prove useful during the development of your apps.

run the example tests

```
npm install
npm test
```
