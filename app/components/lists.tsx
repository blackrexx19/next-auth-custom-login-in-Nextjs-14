'use client'
import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'


const Lists = () => {
  const {data:session} = useSession()
  return (
    <>
    <ul className='flex gap-4'>
        {/* {login && <button onClick={()=>signOut()}>Sign Out</button>}
        {!login && <button onClick={()=>signIn()}>Sign In</button>} */}
        {session?.user ? (
          <div className='flex gap-4'>
            <li><Link href="/profile">Profile</Link></li>
            <button onClick={()=>signOut()}>Sign Out</button>
          </div>
        ):(
          <div className='flex gap-4'>
            <li><Link href="/register">Register</Link></li>
            <button onClick={()=>signIn()}>Sign In</button>
          </div>
        )}
    </ul>
    </>
  )
}

export default Lists