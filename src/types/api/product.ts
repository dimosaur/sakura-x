import {Dates, File} from './_common'

export interface GalleryItem {
  id: number
  sizes: string | number | null
  files: File
  images?: {
    [key: string]: {
      id: number
      file_name: string
      files: File
    }
  }
}

export interface Product extends Dates {
  id: number
  product_id: number
  merchant: string
  merchant_slug: string
  brand_slug: string
  url: string
  sku: string
  name: string
  attribute_set_id: number
  status: number
  visibility: number
  type_id: string
  weight: number
  product_links: string[]
  stock_qty: number
  gallery_transferred: number | null
  generic_product_id: number | null
  final_price: number | string
  thumbnail: string
  stock_qty_virtual: number
  configurable_visible_in_catalog: number | null
  sort_order: number
  weight_sort: number
  original_price: number | string
  special_from_date: string | null
  special_to_date: string | null
  isNew: boolean | null
  hasRestriction: boolean | null
  hasPixelRestriction: boolean | null
  hasSilknetAction: boolean | null
  checkLiveMerchant: boolean | null
  thumb_img: GalleryItem
  gallery: GalleryItem[]
  pivot?: {
    product_reel_id: number
    product_id: number
  }
}
