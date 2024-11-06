import { AxiosError } from 'axios'
import { Error, ErrorTypes } from './types'

const parseQueryError: (e: unknown) => Error = (error: unknown) => {
  if (error instanceof AxiosError) {
    if (!error.response) {
      // Network error
      return {
        icon: 'cloud-offline-outline',
        type: ErrorTypes.Network,
        message: 'Network error, please try again later.',
      }
    } else {
      // Backend error
      const status = error.response.status
      const message =
        error.response.data?.status_message ||
        error.response.data?.message ||
        'An error occurred on the server.'
      return { icon: 'sad', type: ErrorTypes.Backend, status, message }
    }
  } else {
    // Other errors
    return {
      icon: 'alert-circle-outline',
      type: ErrorTypes.Unknown,
      message: 'An unknown error occurred.',
    }
  }
}

export default parseQueryError
