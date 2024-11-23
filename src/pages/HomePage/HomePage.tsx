import { useEffect, useState } from 'react';
import { GetAllFails, GetFailById } from '../../apis/api';
import RankingSection from '@components/RankingSection/RankingSection';
import Card from '@components/Card/Card';
import Emoticon from '@components/Emoticon/Emoticon';

const HomePage = () => {
  const [failInfos, setFailInfos] = useState([]);
  const [selectedFail, setSelectedFail] = useState(null);

  const fetchFailInfos = async () => {
    try {
      const data = await GetAllFails();
      setFailInfos(data);
    } catch (error) {
      console.error('Failed to fetch fail infos:', error);
    }
  };

  const fetchFailById = async (failId: number) => {
    try {
      const data = await GetFailById(failId);
      setSelectedFail(data);
    } catch (error) {
      console.error('Failed to fetch fail by ID:', error);
    }
  };

  useEffect(() => {
    fetchFailInfos();
  }, []);

  return (
    <div>
      <RankingSection
        rankingData={failInfos.map((fail) => ({
          text: fail.content,
          count: fail.goodCount + fail.talentCount + fail.pellikeonCount + fail.drinkCount,
        }))}
      />

      {selectedFail && <Card content={selectedFail.content} />}

      <Emoticon />
    </div>
  );
};

export default HomePage;
