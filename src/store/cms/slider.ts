import {types} from 'mobx-state-tree'

import {File} from '../common/file'

const SlideImg = types.model('CMS_SlideImg', {
  id: types.identifierNumber,
  sizes: types.maybeNull(types.string),
  files: types.maybe(File),
  images: types.map(
    types.model({
      id: types.identifierNumber,
      file_name: types.maybeNull(types.string),
      files: types.maybe(File),
    }),
  ),
})

export const Slide = types.model('CMS_Slide', {
  id: types.identifierNumber,
  slider_id: types.integer,
  title: types.maybeNull(types.string),
  image_mobile: types.maybeNull(types.string),
  image_desktop: types.maybeNull(types.string),
  link: types.maybeNull(types.string),
  order: types.maybeNull(types.string),
  target: types.maybeNull(types.string),
  desktop_img: types.maybeNull(SlideImg),
  mobile_img: types.maybeNull(SlideImg),
  created_at: types.string,
  updated_at: types.string,
})

export const Slider = types.model('CMS_Slider', {
  id: types.identifierNumber,
  name: types.maybeNull(types.string),
  slides: types.array(Slide),
  created_at: types.string,
  updated_at: types.string,
})
