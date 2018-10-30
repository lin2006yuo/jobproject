export function debounce(func, delay) {
    let timer 
    
    return function (...args) {
        if(timer){
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}


export function throttle(action, delay){
    var last = 0
    return function(){
      var curr = +new Date()
      if (curr - last > delay){
        action.apply(this, arguments)
        last = curr 
      }
    }
  }