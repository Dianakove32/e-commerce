import { HeaderWrapper, ItemsInnerWrap, Logo, LogoWrap } from "./style";

import React from 'react'

export default function Header() {
    return (
        <HeaderWrapper>
        <ItemsInnerWrap>
            <Logo>Logo    </Logo>
            <LogoWrap></LogoWrap>
        </ItemsInnerWrap>

        </HeaderWrapper>
    )
}
