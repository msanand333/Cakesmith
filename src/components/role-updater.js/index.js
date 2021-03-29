import { useAuth } from 'js/firebase'
import UserRole from 'js/iam'
import React from 'react'
import { useEffect } from 'react'

export default function RoleUpdater(){
  const [user] = useAuth()
  useEffect(()=> {
    UserRole.updateRole()
  }, [user])
  return null
}