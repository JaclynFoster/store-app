import React from 'react'
import { Space, Spin, Empty } from 'antd'
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading-container">
      <Space
        direction="vertical"
        style={{
          width: '100%'
        }}
      >
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>
      <Empty description={false} />

    </div>
  )
}

export default Loading
