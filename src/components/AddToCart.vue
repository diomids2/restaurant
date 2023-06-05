<template>
    <div class="add-cart">
        <router-link to="/" class="add-cart--go-back" v-if="isSmallScreens()"> ↩ Voltar</router-link>
        <Item :item="item" class="add-cart--item"/>
    </div>
</template>

<script>
import Mixin from '@/mixins/mixins';
import axios from 'axios'
import Item from './Item';

export default {
    props: ['id'],
    mixins: [Mixin],
    components: {
        Item
    },
    data() {
        return {
            item: {}
        }
    },
    computed: {
        selectedCategory() {
                return this.$store.state.selectedCategory;
            }
        },
    created() {
        axios.get(`http://localhost:3000/${this.selectedCategory}/${this.id}`).then((response) => {
                  this.items = response.data;
              //      this.isLoading = false;
                });
    }

}
</script>

<style lang="less" scoped>

.add-cart {
    padding: 50px 20px;
    
    &--go-back {
        font-weight: 600;
        font-size: 18px;
        text-decoration: none;
        color: black;
    }
}


</style>