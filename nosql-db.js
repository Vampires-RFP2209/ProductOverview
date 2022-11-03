// import mongodb
import mongoose from 'mongoose'

// connect to mongodb database
mongoose.connect('mongodb://localhost:27017/products')

const StylesSchema = new mongoose.Schema({
  style_id: {
    type: Number,
    unique: true,
  },
  name: String,
  original_price: String,
  sale_price: String,
  default: Boolean,
  photos: [
    {
      thumbnail_url: String,
      url: String,
    },
  ],
  skus: {
    sku_id: {
      quantity: Number,
      size: String,
    },
  },
})

// create a new schema
const ProductSchemas = new mongoose.Schema(
  {
    name: String,
    slogan: String,
    description: String,
    category: String,
    default_price: String,
    features: [
      {
        feature: String,
        value: String,
      },
    ],
    styles: [
      {
        type: StylesSchema,
      },
    ],
  },
  { timestamps: true }
)
