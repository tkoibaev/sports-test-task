import './EmptyListNote.scss';
import CommentIcon from '../Icons/CommentIcon';

const EmptyListNote = () => {
  return (
    <div className="note">
      <CommentIcon />
      <p>Ваш комментарий станет первым!</p>
    </div>
  );
};

export default EmptyListNote;
