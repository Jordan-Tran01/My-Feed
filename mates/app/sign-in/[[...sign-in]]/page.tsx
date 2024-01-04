import { SignIn } from '@clerk/nextjs'

export default function SigninPage() {
  return <body className="bg-blue-500 flex items-center justify-center">
      <SignIn signUpUrl="/sign-up" />
    </body>
}