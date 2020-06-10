import React from 'react'
import { ActivityIndicator } from 'react-native'

const withLoader = (Component, loaderProps = {}) =>
  function WithLoader({ fetching, ...props }) {
    return fetching ? (
      <ActivityIndicator size="large" color="#0000ff" {...loaderProps} />
    ) : (
      <Component {...props} fetching={fetching} />
    )
  }

export default withLoader
