import Link from "next/link";

export default function Index(){
  return(
      <div>
        <h1>Welcome on the Index-Page!</h1>
          <p>See the users here: <Link  href={"./users"}>Users</Link></p>
          <p>Add new user here: <Link  href={"./create-user"}>Create User</Link></p>
          <p>Delete user here: <Link href={"./delete-user"}>Delete User</Link></p>
          <p>Update user here: <Link href={"./update-user"}>Update User</Link></p>
      </div>
  )
}