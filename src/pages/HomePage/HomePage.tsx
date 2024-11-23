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
    text: '두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~',
    count: 3,
  },
];

const HomePage = () => {
  return (
    <div>
      <RankingSection rankingData={rankingData} />
      <Card content={''} />
      <Emoticon />
    </div>
  );
};

export default HomePage;
