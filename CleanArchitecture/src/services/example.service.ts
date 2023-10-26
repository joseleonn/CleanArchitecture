import axios from 'axios'
import { loadAbort } from '@/utilities'
import { IExample } from '@/models'

export const exampleService = () => {
  const controller = loadAbort()
  return {
    call: axios.get<IExample>('example.com', {
      signal: controller.signal
    }),
    controller
  }
}
