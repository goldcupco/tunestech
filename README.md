# TunesTech - William Groarke

This is a React repository to show the top 100 albums and top 100 songs based on the json feed 
from iTunes


## Required 
- Node 18.4
- NPM 8.1


## Run Instructions

### Node

```
# install the dependencies
yarn

# start the project
yarn start
```

The project will be available on [localhost:3000](http://localhost:3000/)


### Docker

For docker and docker-compose  use the options below:

#### docker development
```
docker-compose up -d --build
```
The project will be available on [localhost:3000](http://localhost:3000/)

#### docker production build
```
docker-compose -f docker-compose.prod.yml up -d --build
```
The project will be available on [localhost](http://localhost:80/)


### Testing and test coverage
```
# dev with watch
yarn test

# coverage
yarn test:coverage
```


## Operational Summary
  - Using the iTunes API this site lists the top 100 albums. 
  - There are 3 pages: `albums`, `songs` and `favorites` .
  - Click a card from the `albums` or `songs` page and it gets selected as a `favorite` with a change of colour.
  - Click a card in the `favorites` page to delete it from favorites.
  - A search bar is available on all pages 
  - A clear 'X' button appears after text is keyed in.
  -  Responsiveness works as follows :
    786 pixels and lower are treated as mobile devices with higher 
    treated as web enabled


  This code is deployed to Vercel at https://tunestech.vercel.app/

  
