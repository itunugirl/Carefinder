// src/components/SignInComponent.tsx
import React from 'react';
import useSignIn from '@hooks/useSignIn';

const SignInComponent: React.FC = () => {
  const { handleSignIn } = useSignIn();

  return (
    <div>
      <button onClick={() => handleSignIn('google')}>Sign in with Google</button>
      <button onClick={() => handleSignIn('facebook')}>Sign in with Facebook</button>
    </div>
  );
};

export default SignInComponent;
