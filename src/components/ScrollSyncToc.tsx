import { throttle } from 'lodash'
import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

const getElementTopOffsetsById = headings => {
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
    .filter(item => item)
}

const OFFSET_ACTIVE_IMTE = 64

const ScrollSyncToc: FC<{ heading: any }> = ({ heading }) => {
  const [activeItemIds, SetActiveItemIds] = useState<any>([])
  const [itemTopOffsets, SetItemTopOffsets] = useState<any>([])

  const scrollEvent = () => {
    console.log('scroll!!!', itemTopOffsets)
    // const item = itemTopOffsets.find((current, i) => {
    //   const next = itemTopOffsets[i + 1]

    //   return next
    //     ? window.scrollY + OFFSET_ACTIVE_IMTE >= current.offsetTop &&
    //         window.scrollY + OFFSET_ACTIVE_IMTE < next.offsetTop
    //     : window.scrollY + OFFSET_ACTIVE_IMTE >= current.offsetTop
    // })

    // const newActiveItemIds = item
    //   ? item.parents
    //     ? [item.id, ...item.parents.map(i => i.id)]
    //     : [item.id]
    //   : []

    // SetActiveItemIds(newActiveItemIds)
  }

  // const handleScroll = () => throttle(() => { scrollEvent() }, 100)
  // const handleScroll = () => throttle(() => scrollEvent(), 100)
  // const handleScroll = () => throttle(() => scrollEvent(), 100)
  // const handleScroll = () => console.log('scroll')
  const handleScroll = throttle(scrollEvent, 100)

  useEffect(() => {
    console.log('mount!')
    SetItemTopOffsets(getElementTopOffsetsById(heading))
    // const itemTopOffsets = getElementTopOffsetsById(heading)
    window.addEventListener(`scroll`, handleScroll)

    return () => {
      console.log('unmount...')
      window.removeEventListener(`scroll`, handleScroll)
    }
  }, [])

  return (
    <>
      <p>もくじ</p>
      <p>{activeItemIds}</p>
    </>
  )
}

export default ScrollSyncToc
