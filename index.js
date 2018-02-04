


function takeANumber(katzDeli, name) {
  
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
  
  
}




function nowServing(katzDeli) {
  
  if (katzDeli.length > 0) {
    
    return `Currently serving ${katzDeli.shift()}.`
    
    
  } else {
    return "There is nobody waiting to be served!"
  }
 
  
}

function currentLine(katzDeli) {
  if (katzDeli.length > 0) {
    var list = []
    var word = "The line is currently:"
    for (var i = 0; i < katzDeli.length; i++ ) {
      var name = `${i+1}. ${katzDeli[i]}`
      if (katzDeli.length - i > 1) {
        
        var comma = "," 
        var full = name + comma
        list.push(full)
      } else {
        var full = sub
        list.push(full)
      }
     }
    return word + list[]
  } else {
    return "The line is currently empty."
  }
 
}
