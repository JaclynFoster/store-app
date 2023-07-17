import React from 'react'
import SignupAddress from './SignupAddress'
import SignupCredentials from './SignupCredentials'
import SignupPersonal from './SignupPersonal'

export const SignupTabs = (signupObj, signupStateHandler) => {
  return [
    {
      key: '1',
      label: `Personal`,
      children: (
        <SignupPersonal
          signupObj={signupObj}
          signupStateHandler={signupStateHandler}
        />
      )
    },
    {
      key: '2',
      label: `Address`,
      children: (
        <SignupAddress
          signupObj={signupObj}
          signupStateHandler={signupStateHandler}
        />
      )
    },
    {
      key: '3',
      label: `Credentials`,
      children: (
        <SignupCredentials
          signupObj={signupObj}
          signupStateHandler={signupStateHandler}
        />
      )
    }
  ]
}
