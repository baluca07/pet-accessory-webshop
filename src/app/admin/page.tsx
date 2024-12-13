import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'


export default async function AdminPage() {
    const supabase = await createClient()

    const {data, error} = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }
    return (
        <>
            <h1>Page to manage employees</h1>
        </>
    )
}