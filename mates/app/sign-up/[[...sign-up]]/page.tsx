import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <body className="bg-blue-500 flex items-center justify-center">
    <SignUp 
        redirectUrl="/new-user"
        afterSignUpUrl="/new-user"
        />
    </body>
  )
}