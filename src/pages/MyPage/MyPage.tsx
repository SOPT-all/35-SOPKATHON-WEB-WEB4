import Header from '@components/Header/Header';
import { MY_FAILS_DATA } from '@utils/mocks/myFailsData';
import Card from '@components/Card/Card';
import Emoticon from '@components/Emoticon/Emoticon';
import { failCardWrapper, failRecordsContainer, titleStyle } from './MyPage.style';

const MyPage = () => {
  const { failsInfos } = MY_FAILS_DATA.data;

  return (
    <div>
      <Header isGoBack={false} />
      <h2 css={titleStyle}>나의 <span>OOPSIE!</span> 기록</h2>
      <div css={failRecordsContainer}>
        {failsInfos.map((fail) => (
          <div key={fail.failId} css={failCardWrapper}>
            <Card content={fail.content} />
            <Emoticon goodCount={3} drinkCount={3} pellikeonCount={3} talentCount={3} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPage;
