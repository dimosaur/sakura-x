import {types} from 'mobx-state-tree'
import CmsItem from './cms'
import axios from 'axios'

const Home = types
  .model('HomeStore', {
    items: types.array(CmsItem),
  })
  .actions(() => ({
    init: () => {
      return axios
        .get('/api/home/active')
        .then(res => console.log(200, res))
        .catch(e => console.log(500, e))
    },
  }))

const RootStore = types.model('RootStore', {
  home: types.maybeNull(Home),
})

export default RootStore
