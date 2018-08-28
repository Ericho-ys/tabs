import {
  ADD_VISITED_VIEWS,
  DEL_ALL_VIEWS,
  DEL_VISITED_VIEWS,
  DEL_OTHERS_VIEWS
} from '../mutation-types'
const tagViews = {
  state: {
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    ADD_VISITED_VIEWS: (state, view) => {
      if (state.visitedViews.some(v => v.path === view.path)) return
      state.visitedViews.push(Object.assign({}, view, {
        title: view.meta.title || 'no-title'
      }))
      if (!view.meta.Nocache) {
        state.cachedViews.push(view.name)
      }
    },
    DEL_VISITED_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews.splice(index, 1)
          break
        }
      }
    },
    DEL_OTHERS_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews = state.visitedViews.slice(i, i + 1)
          break
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews = state.cachedViews.slice(index, index + 1)
          break
        }
      }
    },
    DEL_ALL_VIEWS: state => {
      state.visitedViews = []
      state.cachedViews = []
    }
  },
  actions: {
    addVisitedViews({
      commit
    }, view) {
      commit(ADD_VISITED_VIEWS, view)
    },
    delVisitedViews({
      commit
    }, view) {
      commit(DEL_VISITED_VIEWS, view)
    },
    delOthersViews({
      commit
    }, view) {
      commit(DEL_OTHERS_VIEWS, view)
    },
    delAllViews({
      commit,
      state
    }) {
      return new Promise((resolve) => {
        commit(DEL_ALL_VIEWS)
        resolve([...state.visitedViews])
      })
    }
  }
}
export default tagViews
