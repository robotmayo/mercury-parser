import moment from 'moment'
// Is there a compelling reason to use moment here?
// Mostly only being used for the isValid() method,
// but could just check for 'Invalid Date' string.

import {
  CLEAN_DATE_STRING_RE,
  TIME_MERIDIAN_RE
} from './constants'

// Take a date published string, and hopefully return a date out of
// it. Return none if we fail.
export default function cleanDatePublished(dateString) {
  dateString = cleanDateString(dateString)

  const date = moment(new Date(dateString))

  return date.isValid() ? date : null
}

export function cleanDateString(dateString) {
  return dateString.replace(CLEAN_DATE_STRING_RE, '$1')
                   .replace(TIME_MERIDIAN_RE, '$1 $2 $3')
                   .trim()
}
