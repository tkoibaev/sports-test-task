import React from 'react';
import { TPicture } from '../../types';
import './UserAvatar.scss';

type UserAvatarProps = {
  avatar: TPicture;
};

const UserAvatar: React.FC<UserAvatarProps> = ({ avatar }) => {
  return (
    <div className="avatar">
      <img className="avatar__content" src={avatar.url}></img>
    </div>
  );
};

export default UserAvatar;
