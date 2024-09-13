import React, { useState } from 'react';
import './ParentComment.scss';
import { TParentComment } from '../../types';
import clsx from 'clsx';

type ParentCommentProps = {
  comment: TParentComment;
};

const ParentComment: React.FC<ParentCommentProps> = ({ comment }) => {
  const [isTruncated, setIsTruncated] = useState<boolean>(true);
  return (
    <div className="parent-comment">
      <p>
        Ответ <span>{comment.author.nick}</span>
      </p>
      <p
        onClick={() => {
          setIsTruncated(!isTruncated);
        }}
        className={clsx('parent-comment__content', !isTruncated && 'extended')}
      >
        {comment.text}
      </p>
    </div>
  );
};

export default ParentComment;
