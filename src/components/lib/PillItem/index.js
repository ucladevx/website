import React from 'react'
import classnames from 'classnames'

const PillItem = ({ children, onClick, fill, color }) => {
  const classNames = classnames('lib_pill-item', color, { fill })
  return (
    <div className={classNames} onClick={onClick} role="button" tabIndex="-1">
      {children}
    </div>
  )
}

export default PillItem