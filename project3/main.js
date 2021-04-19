function filterr(container, duration){
  
    // Let's prepare container for the component, filter toggles, and items to filter
    var _container = document.querySelector(container)
    var _duration = duration ? duration : 400
    var _filters = _container.querySelectorAll('[data-filter]')
    var _contents = _container.querySelectorAll('[data-category]')
    var _queue = []
    
    // Before setting any new animation stack it will be needed to clear the previous one (especially after filter change before previous change will end)
    function clearQueue(){
      _queue.forEach(function(timeout){
        clearTimeout(timeout)
      })
      _queue = []
    }
  
    // just a wrapper for setTimeout
    function nextTick(fn, multiply, delay){
      var m = multiply ? multiply : 1,
          d = delay ? delay : 0
      _queue.push(
        setTimeout(fn, _duration*m+d)
      )
    }

    // After start, when no filter is selected show all items
    _contents.forEach(function(el){
      el.classList.add('selected')
    })
    
    // Bind onclick event to all filter buttons
    _filters.forEach(function(filter){
      filter.onclick = function (e) {
        let query = filter.getAttribute('data-filter')
        
        // Set filtered contents to all items if "all" reset was clicked, otherwise select only items which belong to selected filter
        let filtered_contents = query == 'all' ? _contents : _container.querySelectorAll('[data-category*="'+query+'"]')
        
        clearQueue() // Before beginning, clear all timeouts to prevent overlapping of actions
        
        _contents.forEach(function(el){ 
          el.classList.remove('selected')
          nextTick(function(){
            el.classList.add('hidden')
          })
        }) // this will hide all items, before filters will be applied
        

        nextTick(function(){
          filtered_contents.forEach(function(el){
            el.classList.remove('hidden')
          })
          filtered_contents.forEach(function(el, index){
            nextTick(function(){            
              el.classList.add('selected')
            }, 1, index*60)
          })
        }, 1, 30) // 1 is optional timeout duration multiplier, 30 is manualy set additional delay in ms (in this case set to prevent overlapping of two actions: removing and adding 'hidden' class)
      }
    })
}

filterr("#filterr"); 

