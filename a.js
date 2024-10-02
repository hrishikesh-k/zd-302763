await fetch('https://faithful-keyboard-80.webhook.cool', {
  headers: {
    'x-forwarded-for': '8.8.8.8'
  }
})