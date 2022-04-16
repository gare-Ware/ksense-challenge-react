import { Link } from 'react-router-dom'

export default function UserTable(props) {
    
    const tableElements = props.users.map(user => {
        const { username, email, website } = user
        return (
            <tr>
                <td><Link to={`/${username}`}>{username}</Link></td>
                <td>{email}</td>
                <td>{website}</td>
            </tr>
        )
    })
    
    return (
        <table>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Website</th>
            </tr>
            {tableElements}
        </table>
    )
}