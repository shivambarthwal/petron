"use client"
import React from 'react'
import {useRouter} from 'next/router'
import { useSession , signIn,signOut } from 'next-auth/react';
import DashboardForm from '@/components/DashBoardform';
const page = () => {
    const {data :session} = useSession()
    if(!session){
      const router = useRouter()
      router.push('/signup')
    }
  return (
    <div>
        <DashboardForm/>
    </div>
  )
}

export default page