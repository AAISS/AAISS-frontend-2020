import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        api: 'http://localhost:8000/api',
        fields_of_interest: localStorage.getItem('FOI') || '',
        presenters: [],
        teachers: [],
        presentations: [],
        workshops: [],
        FOI: [],
        currentPresenter: {},
        currentTeacher: {},
        currentWorkshop: {}
    },
    mutations: {
        updatePresenters(state, newPresenter) {
            state.presenters = newPresenter;
        },
        updateTeachers(state, newTeacher) {
            state.teachers = newTeacher;
        },
        updateCurrentTeacher(state, newTeacher) {
            state.currentTeacher = newTeacher;
        },
        updateCurrentPresenter(state, newPresenter) {
            state.currentPresenter = newPresenter;
        },
        updateFOI(state, newFOI) {
            state.FOI = newFOI;
        },
        updateWorkshops(state, newWorkshops) {
            state.workshops = newWorkshops
        },
        updatePresentations(state, newPresentation) {
            state.presentations = newPresentation
        },
        updateCurrentWorkshop(state, newWorkshop) {
            state.currentWorkshop = newWorkshop
        },

    },
    actions: {
        getPresenters: function ({commit}) {
            return new Promise((resolve, reject) => {
                axios({
                    url: this.getters.getApi + '/presenter/',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    commit('updatePresenters', response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                })
            })

        },
        getPresenterById: function ({commit}, id) {
            window.console.log('getting speaker with id:', id);
            return new Promise((resolve, reject) => {
                axios({
                    url: this.getters.getApi + '/presenter/' + id,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    commit('updateCurrentPresenter', response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                })
            })
        },
        getTeachers: function ({commit}) {
            return new Promise((resolve, reject) => {
                axios({
                    url: this.getters.getApi + '/teacher/',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    commit('updateTeachers', response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                })
            })

        },
        getTeacherById: function ({commit}, id) {
            window.console.log('getting speaker with id:', id);
            return new Promise((resolve, reject) => {
                axios({
                    url: this.getters.getApi + '/teacher/' + id,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    commit('updateCurrentTeacher', response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                })
            })
        },
        getFieldsOfInterest: function ({commit}, id) {
            return new Promise((resolve, reject) => {
                axios({
                    url: this.getters.getApi + '/foi/',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    commit('updateFOI', response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                })
            })
        },
        getWorkshops: function ({commit}) {
            return new Promise((resolve, reject) => {
                axios({
                    url: this.getters.getApi + '/workshop/',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    commit('updateWorkshops', response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                })
            })
        },
        getWorkshopById: function ({commit}, id) {
            return new Promise((resolve, reject) => {
                axios({
                    url: this.getters.getApi + '/teacher/' + id,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    commit('updateCurrentWorkshop', response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                })
            })
        },
        getPresentations: function ({commit}) {
            return new Promise((resolve, reject) => {
                axios({
                    url: this.getters.getApi + '/presentation/',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    commit('updatePresentations', response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                })
            })
        },

    },


    getters: {
        getApi: state => {
            return state.api;
        },
        getPresenters:
            state => {
                return state.presenters;
            },
        getTeachers:
            state => {
                return state.teachers;
            },
        getFOI:
            state => {
                return state.FOI;
            },
        getWorkshops:
            state => {
                return state.workshops;
            },
        getPresentations:
            state => {
                return state.presentations;
            },
        getCurrentPresenter:
            state => {
                return state.currentPresenter;
            },
        getCurrentTeacher:
            state => {
                return state.currentTeacher;
            }

    }
})
