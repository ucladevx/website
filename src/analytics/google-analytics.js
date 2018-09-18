import React from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import { Route } from 'react-router-dom'
import Config from '../config'

class GoogleAnalytics extends React.Component {
  componentDidMount() {
    this.logPageChange(this.props.location.pathname, this.props.location.search)
  }

  componentDidUpdate({ location: prevLocation }) {
    const {
      location: { pathname, search }
    } = this.props
    const isDifferentPathname = pathname !== prevLocation.pathname
    const isDifferentSearch = search !== prevLocation.search

    if (isDifferentPathname || isDifferentSearch) {
      this.logPageChange(pathname, search)
    }
  }

  logPageChange(pathname, search = '') {
    const page = pathname + search
    const { location } = window
    ReactGA.set({
      page,
      location: `${location.origin}${page}`,
      ...this.props.options
    })
    ReactGA.pageview(page)
  }

  render() {
    return null
  }
}

GoogleAnalytics.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string
  }).isRequired,
  options: PropTypes.object
}

const RouteTracker = () => <Route component={GoogleAnalytics} />

const init = options => {
  options = options || Config.gaTracking.options
  const { trackingId } = Config.gaTracking
  const isGAEnabled = !!trackingId

  if (isGAEnabled) {
    ReactGA.initialize(trackingId, options)
  }

  return isGAEnabled
}

export default {
  GoogleAnalytics,
  RouteTracker,
  init
}
