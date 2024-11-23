import * as styles from './Card.style';

interface CardProps {
  content: string;
  onClickMore?: () => void;
}

function Card({ content, onClickMore }: CardProps) {
  return (
    <div css={styles.cardWrapper}>
      <p css={styles.content}>{content}</p>
      <span css={styles.moreButton} onClick={onClickMore}>
        더보기
      </span>
    </div>
  );
}

export default Card;
