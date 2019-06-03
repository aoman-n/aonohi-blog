import { Location } from '@reach/router'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'

export interface OffsetItem {
  id: string
  offsetTop: number
  parents: any
  depth: number
  value: string
}

const Toc: FC<any> = ({ activeItemIds, heading }) => {
  return (
    <Location>
      {({ navigate, location }) =>
        <List>
          {
            heading.map((item: OffsetItem) => (
              <ListItem key={item.id} style={{marginLeft: `${(item.depth - 2) * 12}px`}}>
                <StyledLink
                  to={`${location.pathname}#${item.id}`}
                ><LinkItem isActive={activeItemIds.includes(item.id)}>{item.value}</LinkItem>
                </StyledLink>
              </ListItem>
            ))
          }
        </List>
      }
    </Location>
  )
}

interface LinkProps {
  isActive: boolean
}

const List = styled.ul`
  list-style: none;
`
const ListItem = styled.li`
  margin-bottom: 1px;
`
const StyledLink = styled(Link)`
  padding-left: 2px;
  box-shadow: none;
  color: #aaa;
`
const LinkItem = styled.span<LinkProps>`
  display: inline-block;
  width: 100%;
  background-color: ${props => props.isActive ? '#fffbf0' : 'white'};
`

export default Toc
