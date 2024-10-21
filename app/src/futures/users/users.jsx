import { useDispatch, useSelector } from "react-redux"
import { store } from "../../store"
import { deleteUser, salaryDown, salaryUp, swapDown, swapUp } from "./users.slice"

export const Users = () => {

    const users = useSelector(store => store.items)
    const dispatch = useDispatch()
    
    return <>
       <h3>users</h3>
       <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>gender</th>
                <th>salary</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user => <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td>{user.salary}</td>
                    <td>
                        <button onClick={() => dispatch(salaryUp(user.id))}>salaryUp</button>
                        <button onClick={() => dispatch(salaryDown(user.id))}>salaryDown</button>
                        <button onClick={() => dispatch(deleteUser(user.id))}>delete</button>
                        <button onClick={() => dispatch(swapUp(user.id))}>swap up</button>
                        <button onClick={() => dispatch(swapDown(user.id))}>swap down</button>
                        </td>
                </tr>)
            }
        </tbody>
       </table>
    </>
}