const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    get appetizers() {
      return this._appetizers;
  	},

  	set appetizers(myAppetizer) {
      this._appetizers.push(myAppetizer);
		},
    get mains() {
      return this._mains;
  	},
  	set mains(myMains) {
      this._mains.push(myMains);
		},
    get desserts() {
      return this._desserts;
  	},
  	set desserts(myDesserts) {
      this._desserts.push(myDesserts);
		}
  },

  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
  	const dish = {
      _name: dishName,
      _price: dishPrice
    };
    this._courses[courseName] = dish;
	},

  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let mealIndex = Math.floor(Math.random()*dishes.length);
    return dishes[mealIndex];
  },

  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer._price + main._price + dessert._price;
    return `\nYour meal selection is:\n\nAppetiser: ${appetizer._name} \nMains: ${main._name}\nDessert ${dessert._name}\n\nTotal Price £${totalPrice.toFixed(2)}\n`;
  }
}

menu.addDishToCourse('appetizers', 'Roasted butternut squash soup', 5.95);
menu.addDishToCourse('appetizers', 'Artichoke Tart', 4.50);
menu.addDishToCourse('appetizers', 'Mini Pie', 5.75);
menu.addDishToCourse('mains', 'Salmon & Mackerel Pate', 8.50);
menu.addDishToCourse('mains', 'Ploughmans Lunch', 7.00);
menu.addDishToCourse('mains', 'Cauliflower dopiaza', 9.00);
menu.addDishToCourse('desserts', 'Christmas Pudding & Brandy Sauce', 6.50);
menu.addDishToCourse('desserts', 'Chocolate Orange Pot', 5.49);
menu.addDishToCourse('desserts', 'Poached Pears', 5.99);

let meal = menu.generateRandomMeal();

console.log(meal);
