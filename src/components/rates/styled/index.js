import styled, {css} from 'styled-components/macro';
import StartIcon from '../../../assets/images/icon-star.svg';
import { device } from '../../../utils/breakpoints';

const RatedWrapper = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    @media ${device.tabletL} { 

        margin-left:auto;
        padding: 2.5rem 0 1rem;
        display:flex;
        flex-wrap:wrap;
        flex-direction:row;
    }
   
`;

const RatedItem = styled.div`

    display:flex;
    width:100%;
    max-width:45rem;
    align-items:center;
    margin-bottom:1.4rem;
    flex-direction:column;
    background-color: var(--color-light-grayish-magenta);
    padding: 2rem 2rem 1.8rem 3.2rem;
    border-radius: 8px;

    p {
        color: var(--color-very-dark-magenta);
        font-weight: 700;
        margin:0;
        font-size: 1.32rem;
    }

    ${({first}) => first && css`
        
        margin:3.4rem auto 1.4rem auto;
            
    `}

    ${({second}) => second && css`
        
        margin:0 auto 1.4rem auto;
            
    `}

    ${({third}) => third && css`
    
        margin:0 auto 1.4rem auto;
        
    `}

    @media ${device.tabletL} { 

        flex: 0 0 45rem;
        align-self: center;
        flex-direction:row;
        ${({first}) => first && css`
        
            margin:0 auto 1.4rem auto;
            
        `}

        ${({second}) => second && css`
        
            margin:0 0 1.4rem 0;
            
    `}

        ${({third}) => third && css`
        
            margin:0 0 1.4rem 0;

            
        `}

    }

`;

const WrapperStars = styled.div`
    margin-bottom: 2rem;
    @media ${device.tabletL} { 
        width:12rem;
        margin-right: 2.8rem;
        margin-bottom: 0;
    }
    
`;

const Star = styled.img.attrs(props => ({
    src: StartIcon
  }))`
    
    & + & {
        margin-left:0.8rem;
    }

  `;

  const Spacer = styled.div`
    position:relative;
    display:flex;
    width:100%;
    @media ${device.tabletL} { 

        &::before {
            content:"";
            flex: 0 1 ${({basis}) => `${basis}%`};
        }

     }
  
  `;

export {

    RatedWrapper,
    RatedItem,
    WrapperStars,
    Star,
    Spacer
}