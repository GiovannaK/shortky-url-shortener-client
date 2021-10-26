import React, { useContext } from 'react'
import { ApiContext } from '../../context/ApiContext'
import { LinkContainer, ShortedLink } from './styles'

export const CreatedLink = () => {
  const { link }: any = useContext(ApiContext)
  return (
    <LinkContainer>
      <ShortedLink>{link.shortURL && link.shortURL}</ShortedLink>
    </LinkContainer>
  )
}
