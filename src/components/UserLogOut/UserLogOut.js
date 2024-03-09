import {logOut} from '../../utilities/users-service'
export default function UserLogOut(
    {user, setUser}
    ){
    function handleLogOut() {
        logOut();
        setUser(null);
      }
        
    return(
        <>
        <button onClick = {handleLogOut}> log out </button>
        </>
    )
}