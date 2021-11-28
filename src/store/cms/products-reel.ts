import {types} from 'mobx-state-tree'

import {Product} from '../product'

export const ProductsReel = types.model('CMS_ProductsReel', {
  id: types.identifierNumber,
  name: types.string,
  href: types.maybeNull(types.string),
  category_id: types.maybeNull(types.integer),
  category: types.maybeNull(types.null),
  products: types.maybeNull(types.array(Product)),
  randomized: types.maybeNull(types.number),
  created_at: types.string,
  updated_at: types.string,
})
