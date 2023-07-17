import React from 'react'
import Personal from './Personal'
import Address from './Address'
import Credentials from './Credentials'

export const ProfileTabs = (infoObj, stateInfoHandler) => {
  return [
    {
      key: '1',
      label: `Personal`,
      children: (
        <Personal infoObj={infoObj} stateInfoHandler={stateInfoHandler} />
      )
    },
    {
      key: '2',
      label: `Address`,
      children: (
        <Address infoObj={infoObj} stateInfoHandler={stateInfoHandler} />
      )
    },
    {
      key: '3',
      label: `Credentials`,
      children: (
        <Credentials infoObj={infoObj} stateInfoHandler={stateInfoHandler} />
      )
    }
  ]
}

