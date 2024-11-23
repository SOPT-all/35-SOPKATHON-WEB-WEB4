import { detailAuthor, detailDescription, detailCardWrapper } from './DetailCard.style';

const DetailCard = () => {
  return (
    <div css={detailCardWrapper}>
      <p css={detailDescription}>
        오늘 썸녀한테 고백해서 차임 걔가 나한테 너 너무 못생겨서 싫다고 함 오늘 썸녀한테 고백해서
        차임 걔가 나한테 너 너무 못생겨서 싫다고 함
      </p>
      <p css={detailAuthor}>작성자명</p>
    </div>
  );
};

export default DetailCard;
