class Breakfast {
	constructor(food, drink){
		this.food = food;
		this.drink = drink;
	}
}

class Lunch {
	constructor(salad, soup, drink){
		this.salad = salad;
		this.soup = soup;
		this.drink = drink;
	}
}

class Dinner {
	constructor(salad, soup, entree, _dessert){
		this.salad = salad;
		this.soup = soup;
		this.entree = entree;
		this._dessert = _dessert;
	}
}

//  expect(bfast.food).to.equal('eggs')
//     expect(bfast.drink).to.equal('juice')
//   })
// })

// describe("lunch", () => {
//   it("has a class of lunch", () => {
//     expect(new Lunch()).to.be.an.instanceof(Lunch);
//   })
//   it("creates a new lunch with the correct parameters", () => {
//     newlunch = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea')
//     expect(newlunch.salad).to.equal('side salad')
//     expect(newlunch.soup).to.equal('broccoli cheddar soup')
//     expect(newlunch.drink).to.equal('iced tea')
//   })
// })

// describe("dinner", () => {
//   it("has a class of dinner", () => {
//     expect(new Dinner()).to.be.an.instanceof(Dinner);
//   })
//   it("creates a new dinner with the correct parameters", () => {
//     newdinner = new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake')
//     expect(newdinner.salad).to.equal('balsamic salad')
//     expect(newdinner.soup).to.equal('consomme')
//     expect(newdinner.entree).to.equal('filet mignon')
//     expect(newdinner._dessert).to.equal('cheesecake')