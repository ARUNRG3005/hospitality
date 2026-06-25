import { getRequestHeaders } from 'vinxi/http'
import { createStartHandler, defaultStreamHandler } from '@tanstack/react-start/server'
import { createRouter } from './router'

const handler = createStartHandler({
  createRouter,
  getRouterShare: () => ({
    headers: getRequestHeaders(),
  }),
})(defaultStreamHandler)

export default handler
