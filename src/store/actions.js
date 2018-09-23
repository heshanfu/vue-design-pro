import types from './mutations/types'

export default {
  getAnalysisData ({ commit }, {
    sales,
    visitors,
    payments,
    operations
  }) {
    commit(types.SET_SALES, sales)
    commit(types.SET_VISITORS, visitors)
    commit(types.SET_PAYMENTS, payments)
    commit(types.SET_OPERATIONS, operations)
  }
}
