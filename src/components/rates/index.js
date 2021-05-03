import React from 'react'
import { RatedWrapper, RatedItem, WrapperStars, Star, Spacer } from './styled'

export function Rates(props) {
    
    return (
        <RatedWrapper>
            <RatedItem first>
                <WrapperStars>
                     {
                         [...Array(5).keys()].map((star) => (
                            <Star key={star} alt={star + "star"} />
                         ))
                     }
                    
                </WrapperStars>
                <p>Rated 5 Stars in Reviews</p>
            </RatedItem>
            <Spacer basis={22}>
                <RatedItem second>
                    <WrapperStars>
                        {
                            [...Array(5).keys()].map((star) => (
                                <Star key={star} alt={star + "star"} />
                            ))
                        }
                        
                    </WrapperStars>
                    <p>Rated 5 Stars in Report Guru</p>
                </RatedItem>
            </Spacer>
            <Spacer basis={30}>
                <RatedItem third>
                    <WrapperStars>
                        {
                            [...Array(5).keys()].map((star) => (
                                <Star key={star} alt={star + "star"} />
                            ))
                        }
                        
                    </WrapperStars>
                    <p>Rated 5 Stars in BestTech</p>
                </RatedItem>
            </Spacer>
        </RatedWrapper>
    )
}
