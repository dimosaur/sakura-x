import {types} from 'mobx-state-tree'

export const Tile = types.model('CMS_Tile', {
  image: types.maybeNull(types.string),
  text: types.maybeNull(types.string),
  link: types.maybeNull(types.string),
  target: types.maybeNull(types.string),
  color: types.maybeNull(types.string),
  textColor: types.maybeNull(types.string),
})

export const TilesGroup = types.model('CMS_TilesGroup', {
  id: types.identifierNumber,
  name: types.string,
  version: types.maybeNull(types.string),
  count_blocks: types.maybeNull(types.integer),
  tiles: types.array(Tile),
  created_at: types.string,
  updated_at: types.string,
})
