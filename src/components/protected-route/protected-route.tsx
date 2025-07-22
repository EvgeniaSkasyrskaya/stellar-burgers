import { useSelector } from 'react-redux';
import { Navigate, useLocation, Location } from 'react-router-dom';
import {
  getCheckResult,
  getUserData
} from '../../services/slices/userInfoSlice';
import { Preloader } from '@ui';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: React.ReactElement;
};

export const ProtectedRoute = ({
  onlyUnAuth,
  children
}: ProtectedRouteProps) => {
  const location = useLocation();
  // const location = useLocation();
  const isUserChecked = useSelector(getCheckResult);
  const userData = useSelector(getUserData);
  if (!isUserChecked) {
    return <Preloader />;
  } else {
    if (!userData && !onlyUnAuth) {
      return <Navigate to='/login' state={{ from: location }} />;
    } else {
      if (userData && onlyUnAuth) {
        const from = location.state?.from || { pathname: '/' };
        const background = { background: from?.state?.background };
        return <Navigate replace to={from} state={background} />;
      } else {
        return children;
      }
    }
  }
};
