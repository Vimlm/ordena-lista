class Property {
  propertys = []

  addProperty(property) {
    this.propertys.push(property);
  }
  
  findProperty(value) {
    for(let i = 0; i < this.propertys.length; i++) {
      if(this.propertys[i] == value) {
        return false
      }
    }
    return true
  }
  
  showProperty(propertys) {
    propertys.forEach((property, index) => {
        console.log(`${index + 1}: ${property}`)
      });
  };

  orderProperty() {
    return this.propertys.sort()
  }
}

module.exports = { Property }