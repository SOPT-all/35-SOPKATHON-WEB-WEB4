import Card from '@components/Card/Card';
import RankingSection from '@components/RankingSection/RankingSection';
import Emoticon from '@components/Emoticon/Emoticon';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { FAILS_DATA } from '@utils/mocks/failsData';
import { Key } from 'react';

const rankingData = [
  {
    text: '두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~',
    count: 0,
  },
  {
    text: '두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~',
    count: 12,
  },
  {
    text: '두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~',
    count: 44,
  },
  {
    text: '두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~',
    count: 32,
  },
  {
    text: '두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~',
    count: 3,
  },
];

const HomePage = () => {
  return (
    <div>
      <Header isGoBack={false} />
      <RankingSection rankingData={rankingData} />

      {FAILS_DATA.data.failInfos.map(
        (fail: {
          failId: Key | null | undefined;
          content: string;
          goodCount: number;
          drinkCount: number;
          pellikeonCount: number;
          talentCount: number;
        }) => (
          <div key={fail.failId} style={{ marginBottom: '20px' }}>
            {/* Card 컴포넌트로 content 표시 */}
            <Card content={fail.content} />
            {/* Emoticon 컴포넌트로 클릭된 이모티콘 데이터 표시 */}
            <Emoticon
              goodCount={fail.goodCount}
              drinkCount={fail.drinkCount}
              pellikeonCount={fail.pellikeonCount}
              talentCount={fail.talentCount}
            />
          </div>
        )
      )}

      <Footer />
    </div>
  );
};

export default HomePage;
