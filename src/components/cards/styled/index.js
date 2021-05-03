import styled,{css} from 'styled-components/macro';
import { device } from '../../../utils/breakpoints';

const CardsWrapper = styled.div`
    padding-top: 3.5rem;
    @media ${device.tabletL} { 
        display:flex;
        justify-content: space-between;
        padding-top: 6.5rem;
    }
`;

const Card = styled.div`
    background-color: var(--color-very-dark-magenta);
    overflow: hidden;
    border-radius: 10px;
    padding: 3.9rem 3.2rem;
    flex: 0 0 31.5%;
    position: relative;
    margin-bottom: 2rem;
    @media ${device.tabletL} { 
        margin-bottom: 0;
        ${({second}) => second && css`

            transform:translateY(1.7rem);
        
        `};

        ${({third}) => third && css`

            transform:translateY(3.3rem);
        
        `};

    }

`;  

const CardHeader = styled.div`

    display:flex;
    justify-content:flex-start;

`;

const CardAuthor = styled.div`

    flex: 0 0 4rem;
    height: 4rem;
    overflow:hidden;
    border-radius: 50%;
    align-self: center;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`;

const CardAuthorInfo = styled.div`

    margin-left: 2.3rem;
    font-size: 1.34rem;
    font-weight: 500;

    .name {
        color:var(--color-light-grayish-magenta);
        margin-top: 0.5rem;
        margin-bottom: 0.58rem;
    }

    .status {
        color:var(--color-soft-pink);
        opacity: 0.7;
        font-weight: 400;
        font-size: 1.32rem;
    }

`;

const CardBody = styled.div`

    padding-top: 3rem;

    .description {
        font-weight: 400;
        color:var(--color-light-grayish-magenta);
        font-size: 1.28rem;
        line-height: 1.7;
    }
`;

export {
    Card,
    CardsWrapper,
    CardHeader,
    CardBody,
    CardAuthor,
    CardAuthorInfo
}