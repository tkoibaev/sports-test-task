import React, { useEffect, useRef, useState } from 'react';
import './Comment.scss';
import UserAvatar from '../UserAvatar/UserAvatar';
import UserLogin from '../UserLogin/UserLogin';
import Button from '../Button.tsx/Button';
import MinusIcon from '../Icons/MinusIcon';
import PlusIcon from '../Icons/PlusIcon';
import { TComment } from '../../types';
import clsx from 'clsx';
import ParentComment from '../ParentComment/ParentComment';
import ActionsIcon from '../Icons/ActionsIcon';
import Input from '../Input/Input';

type CommentProps = {
  comment: TComment;
  onAddResponse: (val: TComment, responseValue: string) => void;
};

const Comment: React.FC<CommentProps> = ({ comment, onAddResponse }) => {
  const [isResponseActive, setIsResponseActive] = useState<boolean>(false);
  const [responseValue, setResponseValue] = useState<string>('');

  const ratingNumberRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleAddResponse = () => {
    onAddResponse(comment, responseValue);
    setIsResponseActive(false);
    setResponseValue('');
  };

  const handleMouseEnter = () => {
    tooltipRef.current?.classList.add('hover');
  };

  const handleMouseLeave = () => {
    tooltipRef.current?.classList.remove('hover');
  };

  useEffect(() => {
    ratingNumberRef.current?.addEventListener('mouseenter', handleMouseEnter);
    ratingNumberRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (ratingNumberRef.current) {
        ratingNumberRef.current.removeEventListener(
          'mouseenter',
          handleMouseEnter
        );
        ratingNumberRef.current.removeEventListener(
          'mouseleave',
          handleMouseLeave
        );
      }
    };
  }, []);

  const getRating = (positiveRating: number, negativeRating: number) => {
    if (positiveRating > negativeRating) {
      return `+${positiveRating - negativeRating}`;
    }
    if (positiveRating < negativeRating) {
      return `-${negativeRating - positiveRating}`;
    }
    return '0';
  };

  return (
    <div className="comment">
      <div className="comment__header">
        <div className="comment__header_info">
          <UserAvatar avatar={comment.author.picture} />
          <div className="comment__data">
            <UserLogin login={comment.author.nick} />
            <p>{comment.published.bunin}</p>
          </div>
        </div>
        <div className="comment__header_action">
          <ActionsIcon />
        </div>
      </div>
      {comment.parentComment && (
        <ParentComment comment={comment.parentComment} />
      )}
      <div className="comment__content">
        <p>{comment.text}</p>
      </div>
      <div className="comment__actions">
        <Button
          onClick={() => setIsResponseActive(!isResponseActive)}
          className="comment__actions_reply"
          text="ОТВЕТИТЬ"
        />
        <div className="comment__actions_rating">
          <div ref={tooltipRef} className="comment__actions_tooltip">
            <div className="positive">+{comment.rating.plus}</div>
            <div className="line"></div>
            <div className="negative">-{comment.rating.minus}</div>
          </div>
          <div className="comment__actions_stats">
            <Button className="rating-button">
              <PlusIcon />
            </Button>
            <div
              ref={ratingNumberRef}
              className={clsx(
                'rating-number',
                comment.rating.plus > comment.rating.minus
                  ? 'positive'
                  : comment.rating.plus < comment.rating.minus
                  ? 'negative'
                  : 'default'
              )}
            >
              {getRating(comment.rating.plus, comment.rating.minus)}
            </div>
            <Button className="rating-button">
              <MinusIcon />
            </Button>
          </div>
        </div>
      </div>
      {isResponseActive && (
        <div className="comment__response">
          <Input
            placeholder="Написать комментарий..."
            value={responseValue}
            onCommentAdd={handleAddResponse}
            onChangeValue={setResponseValue}
            isExpandedByDefault={true}
          />
        </div>
      )}
    </div>
  );
};

export default Comment;
