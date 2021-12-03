import {types} from 'mobx-state-tree'

import {GalleryItem} from './_common/file'

export const Product = types.model('Product', {
  id: types.identifierNumber,
  product_id: types.integer,
  merchant: types.string,
  merchant_slug: types.string,
  brand_slug: types.string,
  sku: types.string,
  url: types.string,
  name: types.string,
  attribute_set_id: types.integer,
  status: types.integer,
  visibility: types.integer,
  type_id: types.string,
  weight: types.number,
  product_links: types.array(types.string),
  stock_qty: types.integer,
  gallery_transferred: types.maybeNull(types.integer),
  generic_product_id: types.maybeNull(types.integer),
  final_price: types.union(types.string, types.number),
  thumbnail: types.string,
  stock_qty_virtual: types.integer,
  configurable_visible_in_catalog: types.maybeNull(types.integer),
  sort_order: types.integer,
  weight_sort: types.integer,
  original_price: types.union(types.string, types.number),
  special_from_date: types.maybeNull(types.string),
  special_to_date: types.maybeNull(types.string),
  isNew: types.maybeNull(types.boolean),
  hasRestriction: types.maybeNull(types.boolean),
  hasPixelRestriction: types.maybeNull(types.boolean),
  hasSilknetAction: types.maybeNull(types.boolean),
  checkLiveMerchant: types.maybeNull(types.boolean),
  thumb_img: GalleryItem,
  gallery: types.array(GalleryItem),
  pivot: types.optional(
    types.maybeNull(
      types.model('Product_Pivot', {
        product_reel_id: types.integer,
        product_id: types.integer,
      }),
    ),
    null,
  ),
})
