import React from 'react'
import Card from '../UI/Card'
import { Divider } from 'antd'
import {
  PlusOutlined,
  MinusOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons'
import './SPAGrid.css'

const SPAGrid = () => {
  return (
    <div className="grid">
      <Card>
        <label className="grid-label">Animal Name</label>
        <Divider />
        <img className="grid-img" />
        <Divider />
        <span>Qty:</span>
        <MinusOutlined className="icons" />
        <span>3</span>
        <PlusOutlined className="icons" />
        <button className="add-cart">
          Add to Cart <ShoppingCartOutlined className="icons" />
        </button>
        <button className="details">Details</button>
      </Card>

      <Card>
        <label className="grid-label">Animal Name</label>
        <Divider />
        <img className="grid-img" />
        <Divider />
        <span>Qty:</span>
        <MinusOutlined className="icons" />
        <span>3</span>
        <PlusOutlined className="icons" />
        <button className="add-cart">
          Add to Cart <ShoppingCartOutlined className="icons" />
        </button>
        <button className="details">Details</button>
      </Card>

      <Card>
        <label className="grid-label">Animal Name</label>
        <Divider />
        <img className="grid-img" />
        <Divider />
        <span>Qty:</span>
        <MinusOutlined className="icons" />
        <span>3</span>
        <PlusOutlined className="icons" />
        <button className="add-cart">
          Add to Cart <ShoppingCartOutlined className="icons" />
        </button>
        <button className="details">Details</button>
      </Card>

      <Card>
        <label className="grid-label">Animal Name</label>
        <Divider />
        <img className="grid-img" />
        <Divider />
        <span>Qty:</span>
        <MinusOutlined className="icons" />
        <span>3</span>
        <PlusOutlined className="icons" />
        <button className="add-cart">
          Add to Cart <ShoppingCartOutlined className="icons" />
        </button>
        <button className="details">Details</button>
      </Card>

      <Card>
        <label className="grid-label">Animal Name</label>
        <Divider />
        <img className="grid-img" />
        <Divider />
        <span>Qty:</span>
        <MinusOutlined className="icons" />
        <span>3</span>
        <PlusOutlined className="icons" />
        <button className="add-cart">
          Add to Cart <ShoppingCartOutlined className="icons" />
        </button>
        <button className="details">Details</button>
      </Card>

      <Card>
        <label className="grid-label">Animal Name</label>
        <Divider />
        <img className="grid-img" />
        <Divider />
        <span>Qty:</span>
        <MinusOutlined className="icons" />
        <span>3</span>
        <PlusOutlined className="icons" />
        <button className="add-cart">
          Add to Cart <ShoppingCartOutlined className="icons" />
        </button>
        <button className="details">Details</button>
      </Card>

      <Card>
        <label className="grid-label">Animal Name</label>
        <Divider />
        <img className="grid-img" />
        <Divider />

        <span>Qty:</span>
        <MinusOutlined className="icons" />
        <span>3</span>
        <PlusOutlined className="icons" />
        <button className="add-cart">
          Add to Cart <ShoppingCartOutlined className="icons" />
        </button>
        <button className="details">Details</button>
      </Card>

      <Card>
        <label className="grid-label">Animal Name</label>
        <Divider />
        <img className="grid-img" />
        <Divider />

        <span>Qty:</span>
        <MinusOutlined className="icons" />
        <span>3</span>
        <PlusOutlined className="icons" />
        <button className="add-cart">
          Add to Cart <ShoppingCartOutlined className="icons" />
        </button>
        <button className="details">Details</button>
      </Card>

      <Card>
        <label className="grid-label">Animal Name</label>
        <Divider />
        <img className="grid-img" />
        <Divider />

        <span>Qty:</span>
        <MinusOutlined className="icons" />
        <span>3</span>
        <PlusOutlined className="icons" />
        <button className="add-cart">
          Add to Cart <ShoppingCartOutlined className="icons" />
        </button>
        <button className="details">Details</button>
      </Card>
    </div>
  )
}

export default SPAGrid


