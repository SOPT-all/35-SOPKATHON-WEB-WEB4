import RankingSection from '@components/RankingSection/RankingSection';
import Card from '@components/Card/Card';
import Emoticon from '@components/Emoticon/Emoticon';
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
    text: '두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 Z입력 가능하게~~~두줄만 입력 가능하게~~~',
    count: 3,
  },
];

const HomePage = () => {
  return (
    <div>
      <RankingSection rankingData={rankingData} />
      <Card content={''} />
      <Emoticon goodCount={0} drinkCount={0} pellikeonCount={0} talentCount={0} />
    </div>
  );
};

export default HomePage;
