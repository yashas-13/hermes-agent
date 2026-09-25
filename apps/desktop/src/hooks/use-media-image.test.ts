// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'

import { mediaImageFrameStyle } from './use-media-image'

describe('mediaImageFrameStyle', () => {
  it('uses measured dimensions after an image loads', () => {
    const style = mediaImageFrameStyle({ width: 1953, height: 1612 }, 4 / 3)

    expect(style.aspectRatio).toBeCloseTo(1953 / 1612)
    expect(style.width).toContain('1953px')
  })

  it('uses the fallback ratio before dimensions are known', () => {
    const style = mediaImageFrameStyle(undefined, 4 / 3)

    expect(style.aspectRatio).toBe(4 / 3)
    expect(style.width).toContain('1.3333333333333333')
  })
})
