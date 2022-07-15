const ROOT_URL = "https://localhost:8000";

const get = (relativeUrl: `/${string}`) => {
  return fetch(ROOT_URL + relativeUrl);
};

/* 
get("hello")        // fails
get("/hello")       // pass
*/
