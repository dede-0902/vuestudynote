const app = new Vue({
  el:'#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39,
        count: 1
      },
      {
        id: 4,
        name: '《盗墓笔记》',
        date: '2005-5',
        price: 99,
        count: 1
      },
    ]
  },
  methods: {
    sub(item) {
      item.count--
    },
    add(item) {
      item.count++
    },
    remove(index) {
      this.books.splice(index,1)
    }
  },
  computed: {
    total() {
      let total = 0;
      for(let book of this.books){
        total += book.count*book.price
      }
      return total
    }
  },
  filters: {
    showPrice(price) {
      return '￥'+price.toFixed(2)
    }
  }
})