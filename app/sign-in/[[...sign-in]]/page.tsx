import { SignIn } from '@clerk/nextjs'

export default function SigninPage() {
  return <body className="bg-[url('assets/images/home-img.jpg')]">
      <SignIn />
    </body>
}