const ListHeader = ({ listName }) => {
    const signOut = () =>{
        console.log("signed out");
    }
    return (
        <div className= "list-header">
            <h1>{listName}</h1>
            <dive className="button-container">
                <button className="create">ADD NEW</button>
                <button className="signout" onClick={signOut}>SIGN OUT</button>
            </dive>
        </div>
    );
}

export default ListHeader;
