import {types} from 'mobx-state-tree'

export const File = types.model('File', {
  file: types.maybeNull(types.string),
  webp: types.maybeNull(types.string),
  label: types.optional(types.maybeNull(types.string), null),
})

export const GalleryItem = types.model('GalleryItem', {
  id: types.integer,
  sizes: types.string,
  files: File,
  images: types.maybe(
    types.map(
      types.model('GalleryItem_Images', {
        id: types.integer,
        file_name: types.maybeNull(types.string),
        file: types.maybe(File),
      }),
    ),
  ),
})
