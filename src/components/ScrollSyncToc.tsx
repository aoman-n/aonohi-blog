import { throttle } from 'lodash'
import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Omit } from '../utils/types'
import Toc, { OffsetItem } from './Toc'

type Item = Omit<OffsetItem, 'value' | 'depth'>

const getElementTopOffsetsById = (headings: OffsetItem[]) => {
  return headings
    .map(({ value, id, parents }) => {
      const element = document.getElementById(id)
      return element
        ? {
            id,
            offsetTop: element.offsetTop,
            parents,
          }
        : null
    })
    .filter((item: Item | null) => item)
}

const OFFSET_ACTIVE_IMTE = 64

const ScrollSyncToc: FC<{ heading: OffsetItem[] }> = ({ heading }) => {
  const [activeItemIds, SetActiveItemIds] = useState<any>([])

  const scrollEvent = (itemTopOffsets: any) => {
    const item = itemTopOffsets.find((current: OffsetItem, i: number) => {
      const next = itemTopOffsets[i + 1]

      return next
        ? window.scrollY + OFFSET_ACTIVE_IMTE >= current.offsetTop &&
            window.scrollY + OFFSET_ACTIVE_IMTE < next.offsetTop
        : window.scrollY + OFFSET_ACTIVE_IMTE >= current.offsetTop
    })

    const newActiveItemIds = item
      ? item.parents
        ? [item.id, ...item.parents.map((i: OffsetItem) => i.id)]
        : [item.id]
      : []

    SetActiveItemIds(newActiveItemIds)
  }

  const handleScroll = throttle(() => scrollEvent(getElementTopOffsetsById(heading)), 100)

  useEffect(() => {
    console.log('mount!')
    window.addEventListener(`scroll`, handleScroll)

    return () => {
      console.log('unmount...')
      window.removeEventListener(`scroll`, handleScroll)
    }
  }, [])

  return (
    <Container>
      <Toc activeItemIds={activeItemIds} heading={heading} />
    </Container>
  )
}

const Container = styled.div`
  font-size: 14px;
`

export default ScrollSyncToc
