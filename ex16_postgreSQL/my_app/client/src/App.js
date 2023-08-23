
import ListHeader from "./components/ListHeader"
import {useEffect} from "react";

const App = () => {
    const userEmail = "test@test.com"
    const getData = async () => {
        try{
            const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
            const js = await response.json()
            console.log("wht the shell is this?");
        }catch (err){
            console.error(err);
        }
    }
    useEffect(() =>{
        getData();
    }, [])
  return (
    <div className= "app">
      <ListHeader listName={"⛱ Holiday tick list"}/>
    </div>
  );
}

export default App;
