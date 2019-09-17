import * as React from 'react'
import moment from 'moment-timezone'
import PropTypes from 'prop-types'

function DateTimeInput({ value, onChange }) {
  return (
    <input
      type="datetime-local"
      value={
        value
          ? moment(value)
              .tz('Asia/Seoul')
              .format('YYYY-MM-DDTHH:mm')
          : ''
      }
      onChange={({ target: { value } }) =>
        onChange(moment(value).toISOString())
      }
    />
  )
}

DateTimeInput.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
}

const MODEL_OPTIONS = []
const models = []

const filteredModelOptions = models
  ? MODEL_OPTIONS.filter((option) =>
      models.find((model) => model === option.key),
    )
  : MODEL_OPTIONS

export default {
  DateTimeInput,
  filteredModelOptions,
}
