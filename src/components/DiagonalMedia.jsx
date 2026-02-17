import React from 'react'

export default function DiagonalMedia({
  src,
  alt,
  height = 320,
  direction = 'right',
  caption,
  // Allow passing img props so we can force eager loading above-the-fold
  imgProps = { loading: 'lazy', decoding: 'async' }
}) {
  return (
    <div className={`diagonal-media ${direction}`} style={{ height }}>
      <img className="diagonal-img" src={src} alt={alt} {...imgProps} />
      <span className="slash" aria-hidden="true" />
      <span className="slash alt" aria-hidden="true" />
      <div className="diagonal-fade" aria-hidden="true" />
      {caption && (
        <div className="diagonal-caption">
          {caption}
        </div>
      )}
    </div>
  )
}
