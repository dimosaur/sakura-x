import {types} from 'mobx-state-tree'

import {Slider} from './slider'
import {TilesGroup} from './tiles'
import {Product} from '../product'

const itemTypes = [
  '\\App\\Models\\Slider',
  '\\App\\Models\\TileGroupOne',
  '\\App\\Models\\TileGroupThree',
  '\\App\\Models\\ProductReel',
]

export const Item = types.model('CMS_Item', {
  id: types.identifierNumber,
  home_page_id: types.integer,
  itemable_id: types.integer,
  itemable_type: types.enumeration(itemTypes),
  active_from: types.maybeNull(types.string),
  active_to: types.maybeNull(types.string),
  order: types.maybeNull(types.integer),
  itemable: types.union(Slider, TilesGroup, Product),
  created_at: types.string,
  updated_at: types.string,
})
