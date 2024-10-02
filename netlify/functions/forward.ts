import type {Config, Context} from '@netlify/functions'

export default async function(_ : Request, context : Context) {
  await fetch('https://faithful-keyboard-80.webhook.cool', {
    headers: {
      'x-forwarded-for': context.ip
    }
  })
  return new Response('done')
}

export const config : Config = {
  path: '/'
}