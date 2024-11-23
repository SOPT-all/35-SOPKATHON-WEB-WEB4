import { useState } from 'react';
import CompleteModal from './components/CompleteModal/CompleteModal';
import Header from '@components/Header/Header';
import { IcArrowLeft } from '@assets/svg';
import {
  backIcon,
  mainStyle,
  pageContainer,
  selectBackgroundContainer,
  textareaSection,
  textareaStyle,
  topSection,
  uploadButton,
} from './PostingPage.style';

const Posting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div css={pageContainer}>
      <Header isGoBack={false} />
      <main css={mainStyle}>
        <section css={topSection}>
          <IcArrowLeft css={backIcon} />
          <h1>나의 멋진 실패 기록</h1>
        </section>
        <section css={textareaSection}>
          <textarea css={textareaStyle} placeholder="당신의 실패경험을 적어주세요." />
        </section>
        <section css={selectBackgroundContainer}>
          <div>배경 1</div>
          <div>배경 2</div>
          <div>배경 3</div>
        </section>
        <button onClick={openModal} css={uploadButton}>
          업로드
        </button>
        <CompleteModal isOpen={isModalOpen} onClose={closeModal} />
      </main>
    </div>
  );
};

export default Posting;
