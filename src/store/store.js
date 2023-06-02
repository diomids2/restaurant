import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selectedCategory: '',
        cartList: []
    },
    mutations: {
        changeCategory(state, id) {
            state.selectedCategory = id;
        },
        addToCart(state, el) {
            state.cartList.push({...el, quantity: 1});
    },
    increaseQuantity(state, index) {
        ++state.cartList[index].quantity
    },
    decreaseQuantity(state, index) {
        --state.cartList[index].quantity
    }
    },
    actions: {
        changeCategory(context, id) {
            context.commit('changeCategory', id);
        },
        addToCart({state, commit}, el) {
            const cardItem = state.cartList.find(cardItem => cardItem.id === el.id);
            const index  = state.cartList.findIndex(cardItem => cardItem.id === el.id);

            cardItem ? commit('increaseQuantity', index) : commit('addToCart', el);

        },
        increaseQuantity({state, commit}, id) {
            const index  = state.cartList.findIndex(cardItem => cardItem.id === id);
            commit('increaseQuantity', index);

        },
        decreaseQuantity({state, commit}, id) {
            const index  = state.cartList.findIndex(cardItem => cardItem.id === id);
            commit('decreaseQuantity', index);
       },
    }
});
