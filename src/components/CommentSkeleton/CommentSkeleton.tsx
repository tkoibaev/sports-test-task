import ContentLoader from 'react-content-loader';
import './CommentSkeleton.scss';

const CommentSkeleton = () => (
  <ContentLoader
    speed={2}
    // width="auto"
    height={150}
    // viewBox="0 0 900 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="skeleton"
  >
    <circle cx="20" cy="25" r="20" />
    <rect x="0" y="60" rx="0" ry="0" width="100%" height="100" />
    <rect x="52" y="6" rx="0" ry="0" width="20%" height="15" />
    <rect x="52" y="30" rx="0" ry="0" width="25%" height="10" />
  </ContentLoader>
);

export default CommentSkeleton;
