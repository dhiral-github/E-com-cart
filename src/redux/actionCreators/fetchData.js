
// import axios from "axios";
import { showApiReduxAction } from './actions'


export  function fetchProducts() {
  return dispatch => {

    fetch('https://newsapi.org/v2/top-headlines?country=us&category=&apiKey=fe415a344cea4034bef041fac54c308c', {
      
   })
   .then(response => response.json())
   .then(response => {
       
       console.log('response==>>>',response);
       dispatch(showApiReduxAction(response.articles))
   })

  //  const getData = () => {
  //   fetch(
  //     `https://newsapi.org/v2/top-headlines?country=us&category=&apiKey=fe415a344cea4034bef041fac54c308c`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setIsLoading(false);
  //       console.log("fetch API:", res.articles);
  //       fetchUsers(res.articles);
  //     });
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     JSON.stringify(getData(), null, 2);
  //     // getData();
  //   }, 2000);
  // }, []);




    // axios
    //   .get(
    //     "https://jsonplaceholder.typicode.com/todos/1"
    //   )
    //   .then(response => {
    //     console.log("fetchProducts response======>>>>", response);
    //     dispatch(showApiReduxAction(response));
    //   })

  };
}
