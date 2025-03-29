import { SignIn } from "@clerk/clerk-react";

const FALLBACKREDIRECTURL_KEY = import.meta.env.VITE_FALLBACKREDIRECTURL_KEY;

const SignInPage = () => (
  <SignIn fallbackRedirectUrl={FALLBACKREDIRECTURL_KEY} />
);

export default SignInPage;
