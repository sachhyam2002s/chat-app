import { auth, googleProvider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Logged in as:', result.user);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return <button onClick={handleLogin}>Sign in with Google</button>;
}
