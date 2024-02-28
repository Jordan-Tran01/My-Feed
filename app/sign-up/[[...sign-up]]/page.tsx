import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <body className="bg-[url('assets/images/home-img.jpg')]">
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      redirectUrl="/new-user"
      afterSignUpUrl="/new-user"
    />
    </body>
  )
}