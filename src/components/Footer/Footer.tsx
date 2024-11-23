import routhPath from '@routes/routhPath';
import { footerBtnWrapper, footerContainer, footerIconStyle } from './Footer.style';
import { IcAddnoteInactive, IcHomeInactive, IcMyInactive } from '@assets/svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div css={footerContainer}>
            <section css={footerBtnWrapper}
                onClick={() => navigate(routhPath.HOME)}
            >
                <IcHomeInactive css={footerIconStyle}/>
                <span>홈</span>
            </section>
            <section css={footerBtnWrapper}
                onClick={() => navigate(routhPath.POST)}
            >
                <IcAddnoteInactive css={footerIconStyle}/>
                <span>게시글 추가</span>
            </section>
            <section css={footerBtnWrapper}
                onClick={() => navigate(routhPath.MYPAGE)}
            >
                <IcMyInactive css={footerIconStyle}/>
                <span>마이</span>
            </section>
        </div>
    );
};

export default Footer;