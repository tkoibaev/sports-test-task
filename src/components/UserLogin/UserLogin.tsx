import React from 'react';
import './UserLogin.scss';
import clsx from 'clsx';

type UserLoginProps = {
  login: string;
  className?: string;
};

const UserLogin: React.FC<UserLoginProps> = ({ login, className }) => {
  return (
    <div className={clsx('user-login', className)}>
      <p className="user_login__nick">{login}</p>
    </div>
  );
};

export default UserLogin;
