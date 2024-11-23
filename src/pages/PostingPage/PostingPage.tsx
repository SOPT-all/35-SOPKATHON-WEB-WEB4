import { useState } from 'react';
import CompleteModal from './components/CompleteModal/CompleteModal';

const Posting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Posting</h1>
      <button onClick={openModal}>모달버튼</button>
      <CompleteModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Posting;
