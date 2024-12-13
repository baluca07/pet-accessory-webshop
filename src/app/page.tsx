import Link from "next/link";

export default function Index(){
  return(
      <div>
        <h1>Welcome on the Index-Page!</h1>
          <Link href={"./departments"}>See departments...</Link>
          <Link href={"./employees"}>See employees...</Link>
      </div>
  )
}