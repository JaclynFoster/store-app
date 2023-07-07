import React from 'react'
import { Space, Spin } from 'antd'


const Loading = () => {
    return (
      <Space
      direction="vertical"
      style={({
        width: '100%'
      })}
      >
        <Spin tip="Loading" size="large">
            <div className="content"></div>
        </Spin>
      </Space>
    )
}

export default Loading