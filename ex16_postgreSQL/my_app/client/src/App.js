
import ListHeader from "./components/ListHeader"
import {useEffect, useState} from "react"; // not quite sure how the hooks work though...
import ListItem from "./components/ListItem";
const App = () => {
    const userEmail = "test@test.com"
    const [tasks, setTasks] = useState(null)

    const getData = async () => {
        try{
            const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
            const js = await response.json()

            setTasks(js)
        }catch (err){
            console.error(err);
        }
    }
    //interesting way to sort the task:
    const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date))
    useEffect(() =>{
        getData();
    }, [])
  return (
    <div className= "app">
      <ListHeader listName={"⛱ Holiday tick list"}/>
        {sortedTasks?.map((task) => <ListItem key={task.id} task={task} />)}
    </div>
  );
}
export default App;
