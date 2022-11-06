import { Guest } from '@/layouts/Guest'
import { LoginForm } from '@/components/auth/LoginForm'

export const LoginPage = () => {
  return (
    <Guest>
      <LoginForm />
    </Guest>
  )
}
