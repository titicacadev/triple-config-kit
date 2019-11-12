;(() => {
  ;(() => {
    const APP_URL_SCHEME = 'sss'
    const reserveIds = ['a']
    ;(() => {
      window.location = `${APP_URL_SCHEME}:///billing?reserveId=${
        reserveIds[0]
      }`
    })()
  })()
})()
