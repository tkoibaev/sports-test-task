import React from 'react';
import './MainPage.scss';
import CommentList from '../../components/CommentList/CommentList';

const MainPage = () => {
  return (
    <div className="page-container">
      <CommentList />
    </div>
  );
};

export default MainPage;
