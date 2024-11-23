import { useNavigate } from 'react-router-dom';
import { headerContainer } from './Header.style';

interface HeaderProps {
  isGoBack: boolean;
}

const Header = ({ isGoBack }: HeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <header css={headerContainer}>
      <section>{isGoBack && <button onClick={handleBackClick}>뒤</button>}</section>
      <section>로고</section>
      <section></section>
    </header>
  );
};

export default Header;
