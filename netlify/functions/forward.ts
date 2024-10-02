import type {Config, Context} from '@netlify/functions'

export default async function(_ : Request, context : Context) {
  await fetch('https://zd-302763.requestcatcher.com/', {
    headers: {
      'x-forwarded-for': context.ip
    }
  })
  return new Response('done')
}

export const config : Config = {
  path: '/'
}