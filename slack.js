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
  GITHUB_ACTIONS_URL,
  TRIGGER_USER,
  TRIGGER_USER_AVATAR,
} = process.env

const template = {
  "channel": SLACK_CHANNEL,
  "icon_emoji": SLACK_ICON_EMOJI,
  "username": SLACK_USERNAME,
  "text": `*${SLACK_TITLE}* - <${GITHUB_ACTIONS_URL}|[detail]>`,
  "attachments":[{
    "color": SLACK_COLOR,
    "author_name": TRIGGER_USER,
    "author_icon": TRIGGER_USER_AVATAR,
    "author_link": `https://github.com/${TRIGGER_USER}`,
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
