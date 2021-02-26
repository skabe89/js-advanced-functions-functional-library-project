const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
    
      for(let i = 0; i < collection.length; i ++){
        callback(collection[i], i, collection)
      }
      return collection
    },

    map: function(collection, callback) {
      let newArr = []
      for(let i = 0; i < collection.length; i ++){
        newArr.push(callback(collection[i]))
      }
      return newArr
    },

    reduce: function(collection, callback, acc = 0) {
      let total = acc
      for(let i = 0; i < collection.length; i ++){
        total = callback(total, collection[i], collection)
      }
      return total
    },

    find: function(collection, predicate) {
      let i
      for(let i = 0; i < collection.length; i++){
        if (collection[i] === predicate){
          return i = predicate
          break
        }
      }
      return i
    },


  }
})()

fi.libraryMethod()
