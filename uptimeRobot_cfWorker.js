async function getUptimeStatus() {
  const response = await fetch('https://api.uptimerobot.com/v2/getMonitors', {
    method: 'POST',
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      api_key: UPTIMEROBOT_KEY,
      format: 'json',
      logs: '1',
    }),
  })
    .then(res => res.json())
    .then(data => {
      const returnObj = { monitors: [] }
      data.monitors.forEach(mon => {
        returnObj.monitors.push({
          name: mon.friendly_name,
          online: mon.status === 2,
          url: mon.url,
        })
      })
      return returnObj
    })
    .catch(err => console.error(err))

  return response
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  // 'Access-Control-Allow-Origin': "https://home.newtelco.de",
  'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

async function handleRequest(request) {
  const details = await getUptimeStatus()
  return new Response(JSON.stringify(details), {
    headers: corsHeaders,
    status: 200,
  })
}

addEventListener('fetch', event => {
  if (event.request.method !== 'PUT' || event.request.method !== 'DELETE') {
    return event.respondWith(handleRequest(event.request))
  } else {
    return new Response(null, {
      status: 405,
      statusText: 'Method Not Allowed',
    })
  }
})
