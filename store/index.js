import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'

const createStore = () => {
    return new Vuex.Store({
        state: {
            modal: false,
            modal_key: 'close',
            opening: true,
            modal_pos: 0,
            toggleMenu: false,
        },
        mutations: {
            showModal(state, key) {
                if (key === state.modal_key) {
                    state.modal = false
                    state.modal_key = 'close'
                    window.scrollTo({top: state.modal_pos, behavior: 'smooth'})
                    state.modal_pos = 0
                } else {
                    history.pushState(null, null, null)
                    state.modal_pos = window.pageYOffset
                    VueScrollTo.scrollTo(`#${key}`, 700, { offset: -80 })
                    state.modal = true
                    state.modal_key = key
                }
            },
            closeModal(state) {
                state.modal = false
                state.modal_key = 'close'
                if(state.modal_pos) window.scrollTo({top: state.modal_pos, behavior: 'smooth'})
                if(state.toggleMenu) state.toggleMenu = false
                state.modal_pos = 0
            },
            openMenu(state) {
                state.modal = true
                state.toggleMenu = true
            },
        },
        actions: {
            closeModal ({ commit }) {
                commit('closeModal')
            },
            openMenu ({ commit }) {
                commit('openMenu')
            }
        }
    })
}

export default createStore