import Vue from 'vue'
import Vuex from 'vuex'
import { extendToType } from '@/utils/lib.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    queryResult: {
      projects:[],
      files: []
    }
  },
  mutations: {
    SET_FILES({queryResult},files) { 
      queryResult.files = files
      console.log('store',queryResult)
    },
    SET_PROJECTS({queryResult},projects) {
      queryResult.projects = projects
    }
  },
  actions: {
    async updateQueryData({ commit }, {code,result}){
      if (code !== 0) {
        console.log('error')
        return
      } else {
        const files = []
        for(const file of result.items) {
          files.push({
            name:file.name,
            size: file.size,
            type: extendToType(file.name).type,
            path:[file.path]
          })
        }
        commit('SET_FILES',files)
        return
        // console.log(files)
      }
    }
  },
  modules: {
  }
})

// {
//   projects: [
//     {
//       title: 'miku',
//       image: 'http://kod.shiningacg.fun/1.jpg',
//       description: 'nothing',
//       files: [
//         {
//           name: 'haha',
//           size: 1024,
//           type: 'video',
//           path: ['/ss']
//         }
//       ]
//     },
//     {
//       title: 'miku',
//       image: 'http://kod.shiningacg.fun/1.jpg',
//       description: 'nothing',
//       files: [
//         {
//           name: 'haha',
//           size: 1024,
//           type: 'video',
//           path: ['/ss']
//         }
//       ]
//     }
//   ],
//   files: [
//     {
//       name: 'haha',
//       size: 1024,
//       type: 'video',
//       path: ['/ss']
//     }
//   ]
// }