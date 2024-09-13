import { useEffect, useState } from 'react';
import './CommentList.scss';
import axios, { AxiosResponse } from 'axios';
import { TComment } from '../../types';
import Comment from '../Comment/Comment';
import Input from '../Input/Input';
import { GET_COMMENTS_ENDPOINT, mockAuthAuthor } from '../../consts';
import EmptyListNote from '../EmptyListNote/EmptyListNote';
import CommentSkeleton from '../CommentSkeleton/CommentSkeleton';
import moment from 'moment';
import { translateMonthNameFromEnglish, getNoun } from '../../functions';

export type Response = Promise<AxiosResponse> | any;

const CommentList = () => {
  const [comments, setComments] = useState<TComment[]>([]);
  const [newCommentValue, setNewCommentValue] = useState<string>('');
  const [isDataLoading, setIsDataLoading] = useState<boolean>(true);

  const fetchComments = async () => {
    try {
      const response = await axios.get(GET_COMMENTS_ENDPOINT);

      setComments(response.data.data.commentQueries.list.comments);
      setIsDataLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addComment = () => {
    const newComment: TComment = {
      id: Date.now().toString(),
      text: newCommentValue,
      rating: {
        plus: 0,
        minus: 0,
      },
      parentComment: null,
      published: {
        bunin: translateMonthNameFromEnglish(moment().format('DD MMMM, HH:mm')), //moment.locale() don't operate
      },
      author: mockAuthAuthor,
    };

    setComments((prevComments) => [newComment, ...prevComments]);
    setNewCommentValue('');
  };

  const addResponse = (currentComment: TComment, responseValue: string) => {
    console.log(responseValue);
    const newResponse: TComment = {
      id: Date.now().toString(),
      text: responseValue,
      rating: {
        plus: 0,
        minus: 0,
      },
      parentComment: {
        id: currentComment.id,
        text: currentComment.text,
        author: currentComment.author,
      },
      published: {
        bunin: translateMonthNameFromEnglish(moment().format('DD MMMM, HH:mm')), //moment.locale() don't operate
      },
      author: mockAuthAuthor,
    };
    setComments((prevComments) => [newResponse, ...prevComments]);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="comment-section">
      <div className="comment-section__header">
        {comments.length} {getNoun(comments.length)}
      </div>
      <Input
        onCommentAdd={addComment}
        value={newCommentValue}
        onChangeValue={setNewCommentValue}
        placeholder="Написать комментарий..."
        className="comment-section__input"
      />
      {isDataLoading ? (
        [...new Array(6)].map((_, index) => <CommentSkeleton key={index} />)
      ) : comments.length ? (
        comments.map((comment) => (
          <Comment
            onAddResponse={(currentComment, responseValue) =>
              addResponse(currentComment, responseValue)
            }
            key={comment.id}
            comment={comment}
          />
        ))
      ) : (
        <EmptyListNote />
      )}
    </div>
  );
};

export default CommentList;
