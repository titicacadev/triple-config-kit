const {
  SLACK_CHANNEL,
  SLACK_WEBHOOK,
  SLACK_USERNAME,
  SLACK_ICON_EMOJI,
  SLACK_COLOR,
  SLACK_FOOTER,
  SLACK_TITLE,
  SLACK_TOPIC,
  GITHUB_REF,
  GITHUB_EVENT_NAME,
  GITHUB_REPOSITORY,
  GITHUB_ACTIONS_URL,
  SLACK_AUTHOR_NAME,
  SLACK_AUTHOR_ICON,
} = process.env

const template = {
  "channel": SLACK_CHANNEL,
  "icon_emoji": SLACK_ICON_EMOJI,
  "username": SLACK_USERNAME,
  "text": `*${SLACK_TITLE}* - <${GITHUB_ACTIONS_URL}|[${GITHUB_REPOSITORY}]>`,
  "attachments":[{
    "fallback": "GitHub Action workflow done.",
    "color": SLACK_COLOR,
    "author_name": SLACK_AUTHOR_NAME,
    "author_icon": SLACK_AUTHOR_ICON,
    "author_link": `https://github.com/${SLACK_AUTHOR_NAME}`,
    "fields":[{
      "title": "Topic",
      "value": SLACK_TOPIC,
      "short": false
    }, {
      "title": "Ref",
      "value": GITHUB_REF,
      "short": true
    }, {
      "title": "Event",
      "value": GITHUB_EVENT_NAME,
      "short": true
    }],
    "footer": SLACK_FOOTER,
    "ts": `${(new Date()).getTime()}`
  }]
}

console.log(JSON.stringify(template))
