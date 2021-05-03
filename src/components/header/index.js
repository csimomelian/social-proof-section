import React from 'react'
import { Rates } from '../rates'
import { HeaderWrapper, HeaderInfo, HeaderStats, HeaderTitle, HeaderDescription } from './styled'

export function Header(props) {
    
    return (
        <HeaderWrapper>
            <HeaderInfo>
                <HeaderTitle>10,000+ of our users love our products.</HeaderTitle>
                <HeaderDescription>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</HeaderDescription>
            </HeaderInfo>
            <HeaderStats>
                <Rates />
            </HeaderStats>
        </HeaderWrapper>
    )
}
