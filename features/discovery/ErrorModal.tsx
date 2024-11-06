import React from 'react'
import { FullScreenModal } from '../theme/FullScreenModal'
import { Ionicons } from '@expo/vector-icons'
import parseQueryError from '../tmdb/utils'
import { themeConfig } from '../theme/themeConfig'
import { Text } from '../theme/Text'
import { CircleButton } from '../theme/CircleButton'

type Props = {
  error: unknown
}

export const ErrorModal: React.FC<Props> = ({ error, onRetry }) => {
  const { message, icon } = parseQueryError(error)
  return (
    <FullScreenModal>
      <Ionicons name={icon} size={100} color={themeConfig.colors.text} />
      <Text>{message}</Text>
      {!!onRetry && <CircleButton ionIconName={'refresh'} onPress={onRetry} />}
    </FullScreenModal>
  )
}
