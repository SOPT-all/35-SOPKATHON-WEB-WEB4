import Header from '@components/Header/Header';
import { MY_FAILS_DATA } from '@utils/mocks/myFailsData';
import Card from '@components/Card/Card';
import Emoticon from '@components/Emoticon/Emoticon';
import { badge, failCardWrapper, failRecordsContainer, titleStyle } from './MyPage.style';
import Footer from '@components/Footer/Footer';
import { ImgPelican24 } from '@assets/svg';

const MyPage = () => {
  const { failsInfos } = MY_FAILS_DATA.data;

  return (
    <div>
      <Header isGoBack={false} />
      <h2 css={titleStyle}>
        나의 <span>OOPSIE!</span> 기록
      </h2>
      <div css={failRecordsContainer}>
        {failsInfos.map((fail, index) => (
          <div key={fail.failId} css={failCardWrapper}>
            {index === 0 && <ImgPelican24 css={badge} />}
            <Card content={fail.content} />
            <Emoticon
              goodCount={fail.goodCount}
              drinkCount={fail.drinkCount}
              pellikeonCount={fail.pellikeonCount}
              talentCount={fail.talentCount}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
