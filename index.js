function findMatching(drivers, query) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === query.toLowerCase();
    })
};

function fuzzyMatch(drivers, query) {
    const lengthofQuery = query.length
    return drivers.filter(function(driver) {
        return driver.slice(0, lengthofQuery) === query
    })
}

function matchName(drivers, name){
    return drivers.filter(function(hometown){
      return hometown.name === name
    })
  }