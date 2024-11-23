import { addPostWrapper, footerContainer, homeWrapper, myPageWrapper } from './Footer.style';

const Footer = () => {
    return (
        <div css={footerContainer}>
            <section css={homeWrapper}>
                <div></div>
                <span>홈</span>
            </section>
            <section css={addPostWrapper}>
                <div></div>
                <span>게시글 추가</span>
            </section>
            <section css={myPageWrapper}>
                <div></div>
                <span>마이</span>
            </section>
        </div>
    );
};

export default Footer;