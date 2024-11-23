import { useMemo } from 'react';
import { cardWrapper, contentStyle, moreButton } from './Card.style';

interface CardProps {
  content: string;
}

const backgroundImages = [
  'url(/svg/ic_failnote_1_160.svg)',
  'url(/svg/ic_failnote_2_160.svg)',
  'url(/svg/ic_failnote_3_160.svg)',
];

function Card({ content }: CardProps) {
  const randomImage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
  }, []);
  return (
    <div css={cardWrapper(randomImage)}>
      <p css={contentStyle}>{content}</p>
      <button css={moreButton} onClick={() => {}}>
        더보기
      </button>
    </div>
  );
}

export default Card;
