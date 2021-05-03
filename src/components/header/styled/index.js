import styled from 'styled-components/macro';
import { device } from '../../../utils/breakpoints';

const HeaderWrapper = styled.header`

    @media ${device.tabletL} { 
        display:flex;
        margin-top: 10rem;
        justify-content: space-between;
    }

`;

const HeaderInfo = styled.div`

    flex: 0 0 45rem;
    text-align:center;
    @media ${device.tabletL} { 
        text-align:left;
    }

`;

const HeaderStats = styled.div`
    flex: 0 1 57%;
`;

const HeaderTitle = styled.h1`

    color: var(--color-very-dark-magenta);
    font-size: 3.65rem;
    line-height: 1.06;
    font-weight: 700;
    letter-spacing: -1px;
    max-width:30rem;
    margin: 5rem auto 3rem auto; 

    @media ${device.mobileL} { 
        font-size: 4rem;
        max-width:100%;
    }
    @media ${device.tabletL} { 
        font-size: 4.65rem;
        margin: 0.9rem 0 0 0;
        max-width:100%;

    }
     
`;

const HeaderDescription = styled.p`
    font-size: 1.42rem;
    font-weight: 500;
    color: var(--color-dark-grayish-magenta);
    margin-top: 1.4rem;
    line-height: 1.8;
    @media ${device.tabletL} { 
        max-width: 43rem;
    }
    
`;

export {
    HeaderWrapper,
    HeaderInfo,
    HeaderStats,
    HeaderTitle,
    HeaderDescription
}