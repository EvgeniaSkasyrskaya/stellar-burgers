import { FC, SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../services/store';
import { registerUser } from '../../services/slices/userInfoSlice';
import { RegisterUI } from '@ui-pages';
import { TRegisterData } from '@api';

export const Register: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setError(null);
    if (!userName || !email || !password) return;
    const registerUserData: TRegisterData = {
      email: email,
      name: userName,
      password: password
    };
    dispatch(registerUser(registerUserData))
      .unwrap()
      .catch((err) => setError(err));
  };

  return (
    <RegisterUI
      errorText={error?.message}
      email={email}
      userName={userName}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      setUserName={setUserName}
      handleSubmit={handleSubmit}
    />
  );
};
