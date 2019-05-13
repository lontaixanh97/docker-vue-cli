// CoinForm.vue

<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Coin</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addCoin">
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="newCoin.name"/>
                    </div>
                    <div class="form-group">
                        <label>Price:</label>
                        <input type="text" class="form-control" v-model="newCoin.price"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Coin"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { db } from '../config/db';

export default {
  name: 'CoinForm',
  firebase: {
    coins: db.ref('quan')
  },
  data () {
    return {
      newCoin: {
          name: '',
          price: ''
      }
    }
  },
  methods: {
      addCoin() {
        this.$firebaseRefs.coins.push({
            name: this.newCoin.name,
            price: this.newCoin.price
        })
        this.newCoin.name = '';
        this.newCoin.price = '';
        alert("Succeessfully added")
      }
    }
}
</script>