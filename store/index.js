import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'

const createStore = () => {
    return new Vuex.Store({
        state: {
            modal: false,
            modal_key: 'close',
            opening: true,
        },
        mutations: {
            showModal(state, key) {
                if (key === state.modal_key) {
                    state.modal = false
                    state.modal_key = 'close'
                } else {
                    VueScrollTo.scrollTo(`#${key}`, 700, { offset: -80 })
                    state.modal = true
                    state.modal_key = key
                }
            },
            closeModal(state) {
                state.modal = false
                state.modal_key = 'close'
            },
        }
    })
}

export default createStore