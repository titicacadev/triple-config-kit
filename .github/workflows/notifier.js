const exec = require('child_process').exec;

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

const COLOR_PRESET = {
  "success": "#36a64f",
  "fail": "#fd2e69",
  "good": "#36a64f",
  "bad": "#fd2e69",
  "green": "#36a64f",
  "blue": "#368fff",
  "mint": "#26cec2",
  "red": "#fd2e69",
  "purple": "#975ffe",
  "emerald": "#0dd0af",
  "gray": "#3a3a3a",
  "brightgray": "#efefef",
  "orange": "#ff9623",
}

const template = {
  "channel": SLACK_CHANNEL,
  "icon_emoji": SLACK_ICON_EMOJI,
  "username": SLACK_USERNAME,
  "text": `*${SLACK_TITLE}* - <${GITHUB_ACTIONS_URL}|[${GITHUB_REPOSITORY}]>`,
  "attachments":[{
    "fallback": "GitHub Action workflow done.",
    "color": COLOR_PRESET[SLACK_COLOR] || SLACK_COLOR,
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

const payload = JSON.stringify(template)
const cmd = `curl -X POST --data-urlencode 'payload=${payload}' ${SLACK_WEBHOOK}`

exec(cmd, function (error, stdout, stderr) {
  console.log(stdout);
  console.log(stderr);

  if (error !== null) {
    console.error(error);
  }
})
