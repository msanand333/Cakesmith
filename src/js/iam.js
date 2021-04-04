import { ref } from "./const"
import { getCurrentUserInfo } from "./firebase"
import { useState } from 'react'

export const ROLE = {
  NA: 'na',
  OWNER: '0',
}

/**
 * This callback is a part of userRole change
 * @callback UserRoleOnRoleChange
 * @param {string} userRole
 */
export default class UserRole {
  static role = ROLE.NA

  static roleChangeListeners = []

  static updateRole = async () => {
    const { userId } = await getCurrentUserInfo() || {}
    if (!userId) return
    const roleSnap = await ref().user.doc(userId).get()
    if (!roleSnap.exists) return
    const { role: newRole = ROLE.NA } = roleSnap.data() || {}
    this.updateListenersOnRoleChange(this.role, newRole)
    this.role = newRole
  }

  static updateListenersOnRoleChange = (oldRole, newRole) => {
    if (oldRole === newRole) return
    this.roleChangeListeners.forEach((listener) => {
      listener?.(newRole)
    })
  }

  /**
   *
   * @param {UserRoleOnRoleChange} onChange
   */
  static onRoleChange = (onChange) => {
    this.roleChangeListeners.push(onChange)
  }
}

export function useRole() {
  const [role, setRole] = useState(UserRole.role)
  UserRole.onRoleChange(setRole)
  return role
}