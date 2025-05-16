import React from 'react';
import Row from '../Row/Row';
import requests from '../Utils/Request';

const RowList = () => {
    
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title='Trending now'
                 fetchUrl={requests.fetchTrending}

      />
      <Row title ='Top rated movies' 
        fetchUrl={requests.fetchTopRatedMovies}
      />
     <Row title='Action movies'
      fetchUrl={requests.fetchActionMovies}
     />
     <Row title='Comedy movies' 
      fetchUrl={requests.fetchComedyMovies}
     />
     <Row title='Horror film' 
      fetchUrl={requests.fetchHorrorMovies}
     />
     <Row title='Romance movies' 
      fetchUrl={requests.fetchRomanceMovies}
     />
     <Row title='Documentary movies' 
      fetchUrl={requests.fetchDocumentaries}
     />
     <Row title='TV show' 
      fetchUrl={requests.fetchTVShow}
     />
     
    </>
  );
};

export default RowList;