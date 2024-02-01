import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  const { user } = useSelector(
    ({ user }) => ({ user: user.user }),
    shallowEqual // shallowEqual을 사용하여 얕은 비교 수행
  );

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
