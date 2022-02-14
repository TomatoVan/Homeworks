type loadingACType = {
	type: "CHANGE-LOADING",
	isLoading: boolean
}

const initState = {
	isLoading: false
}

export const loadingReducer = (state = initState, action: loadingACType): typeof initState => {
	switch (action.type) {
		case 'CHANGE-LOADING': {
			return {...state, isLoading: action.isLoading}
		}
		default:
			return state
	}
}

export const loadingAC = (isLoading: boolean): loadingACType => ({type: "CHANGE-LOADING", isLoading} as const)