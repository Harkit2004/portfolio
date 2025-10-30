import React from 'react'

interface IonIconProps {
  name?: string
  className?: string
  [key: string]: unknown
}

const IonIcon: React.FC<IonIconProps> = ({ name, className, ...props }) => {
  return React.createElement('ion-icon', { name, class: className, ...props })
}

export default IonIcon
