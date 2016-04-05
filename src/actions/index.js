import fetchJsonp from 'fetch-jsonp';

const ROOT_URL = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&gsrnamespace=0&gsrlimit=10&exintro&explaintext&exsentences=1&exlimit=max'
export const FETCH_WIKI = 'FETCH_WIKI';


export function fetchWiki(title) {

  const url = `${ROOT_URL}&gsrsearch=${title}`;
  const request = fetchJsonp(url)
  .then(function(response) {
    return response.json()
  });

  return {
    type: FETCH_WIKI,
    payload: request
  };
}
