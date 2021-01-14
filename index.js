// Code your solution here
function findMatching (drivers, searchTerm) {
  let result = drivers.filter(function(driver){
    return driver.toLowerCase() === searchTerm.toLowerCase()
  })
  return result
}

function fuzzyMatch(drivers, searchTerm) {
  return drivers.filter(function(driver){
    return driver.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0
  })
}

function matchName (drivers, searchTerm) {
  return drivers.filter(function(driver){
   return driver.name === searchTerm
  })
}