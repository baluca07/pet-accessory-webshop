import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Link from "next/link";


export default async function AdminPage() {
    const supabase = await createClient()

    const {data, error} = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }
    return (
        <>
            <h1>Account infos</h1>
            <p>Email: {data.user.email}</p>
            <p>Role: {data.user.role}</p>
            <Link href={"/"}>Go to home page...</Link>
        </>
    )
}