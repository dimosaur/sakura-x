import {Dates} from './_common'
import {Product} from './product'

export interface TileGroupOne extends Dates {
  id: number
  name: string
  tile_1: string | null
  tile_2: string | null
  tile_3: string | null
  tile_4: string | null
  tile_5: string | null
  tile_1_title: string | null
  tile_2_title: string | null
  tile_3_title: string | null
  tile_4_title: string | null
  tile_5_title: string | null
  tile_1_link: string | null
  tile_2_link: string | null
  tile_3_link: string | null
  tile_4_link: string | null
  tile_5_link: string | null
  tile_1_target: string | null
  tile_2_target: string | null
  tile_3_target: string | null
  tile_4_target: string | null
  tile_5_target: string | null
  tile_1_mobile: string | null
  tile_2_mobile: string | null
  tile_3_mobile: string | null
  tile_4_mobile: string | null
  tile_5_mobile: string | null
}

interface TileGroupThree extends Dates {
  id: number
  name: string
  version: string
  count_blocks: number
  tile_1: string | null
  tile_2: string | null
  tile_3: string | null
  tile_4: string | null
  tile_5: string | null
  tile_6: string | null
  tile_7: string | null
  tile_8: string | null
  tile_1_color: string | null
  tile_2_color: string | null
  tile_3_color: string | null
  tile_4_color: string | null
  tile_5_color: string | null
  tile_6_color: string | null
  tile_7_color: string | null
  tile_8_color: string | null
  tile_1_text_color: string | null
  tile_2_text_color: string | null
  tile_3_text_color: string | null
  tile_4_text_color: string | null
  tile_5_text_color: string | null
  tile_6_text_color: string | null
  tile_7_text_color: string | null
  tile_8_text_color: string | null
  tile_1_text: string | null
  tile_2_text: string | null
  tile_3_text: string | null
  tile_4_text: string | null
  tile_5_text: string | null
  tile_6_text: string | null
  tile_7_text: string | null
  tile_8_text: string | null
  tile_1_link: string | null
  tile_2_link: string | null
  tile_3_link: string | null
  tile_4_link: string | null
  tile_5_link: string | null
  tile_6_link: string | null
  tile_7_link: string | null
  tile_8_link: string | null
  tile_1_target: string | null
  tile_2_target: string | null
  tile_3_target: string | null
  tile_4_target: string | null
  tile_5_target: string | null
  tile_6_target: string | null
  tile_7_target: string | null
  tile_8_target: string | null
  tile1_img: any | null // TODO
  tile2_img: any | null // TODO
  tile3_img: any | null // TODO
  tile4_img: any | null // TODO
  tile5_img: any | null // TODO
  tile6_img: any | null // TODO
  tile7_img: any | null // TODO
  tile8_img: any | null // TODO
}

interface Slide extends Dates {
  id: number
  slider_id: number
  title: string
  image_mobile: string
  image_desktop: string
  link: string
  target: string
  order: number | string
  desktop_img: any // TODO
  mobile_img: any // TODO
}

interface Slider extends Dates {
  id: number
  name: string
  slides: Slide[]
}

interface ProductReel extends Dates {
  id: number
  category_id: number
  name: string
  href: string | null
  randomized: number
  category: any // TODO
  products: Product[]
}

type ItemableTypes =
  | '\\App\\Models\\Slider'
  | '\\App\\Models\\ProductReel'
  | '\\App\\Models\\TileGroupOne'
  | '\\App\\Models\\TileGroupTwo'
  | '\\App\\Models\\TileGroupThree'

export interface CmsItem extends Dates {
  id: number
  home_page_id: number
  itemable_id: number
  itemable_type: ItemableTypes
  order: number
  itemable: Slider | ProductReel | TileGroupOne | TileGroupThree
}

interface CmsMeta {
  page_type: string
  title: string | null
  description: string | null
  meta_title: string | null
  meta_description: string | null
  image: string | null
  image_width: number | null
  image_height: number | null
  url: string | null
}

export interface Cms extends Dates {
  id: number
  name: string
  active_items: CmsItem[]
  meta: CmsMeta
}
