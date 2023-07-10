import React from 'react'
import { Space, Spin, Skeleton } from 'antd'

const Loading = () => {
  return (
    <div>
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

      <Skeleton.Image active />
      <Skeleton active />
      <Skeleton.Image active />
      <Skeleton active />
      <Skeleton.Image active />
      <Skeleton active />
      <Skeleton.Image active />
    </div>
  )
}

export default Loading
