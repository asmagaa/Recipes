export const initialState = {
	recipes: [
		{ id: 1, title: 'Spaghetti',
            content: ['Sos pomidorowy, ', 'Papryka, ', 'Przyprawy, ', 'i tak dalej...'],
            isFavorite: false },
		{ id: 2, title: 'Król Malezji', 
            content: ['Sultan Haji Ahmad Shah Al-Musta’in Billah ibni Almarhum Sultan Abu Bakar Ri’ayatuddin Al-Mu’azzam Shah.'], 
            isFavorite: true },
	],
}

export function recipeReducer(state, action) {
	switch (action.type) {
		case 'ADD_RECIPE':
			const newRecipe = {
				id: Date.now(),
				title: action.recipe.title,
				content: action.recipe.content,
				isFavorite: false,
			}
			return { ...state, recipes: [...state.recipes, newRecipe] }

		case 'REMOVE_RECIPE':
			return { ...state, recipes: state.recipes.filter(recipe => recipe.id !== action.id) }

		case 'TOGGLE_FAVORITE':
			return {
				...state,
				recipes: state.recipes.map(recipe =>
					recipe.id === action.id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
				),
			}

		default:
			return state
	}
}
