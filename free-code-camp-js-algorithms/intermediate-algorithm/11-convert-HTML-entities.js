function convertHTML(str) {
  const replace = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "<>": "&lt;&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

  for(let key in replace){
    const re = new RegExp(key, "g")
    str = str.replace(re, replace[key])
  }
}

