#non blocking
#setTimeout (-> console.log("hello")), 1000
#console.log("world")


#blocking
start = new Date().getTime()
while new Date().getTime() < (start + 1000)
  null 
console.log("world")
