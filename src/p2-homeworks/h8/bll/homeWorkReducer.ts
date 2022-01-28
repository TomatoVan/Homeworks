import {UserType} from "../HW8";

type ActionType = { type: 'SORT', payload: 'up' | 'down' } | { type: 'CHECK-AGE', payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
	switch (action.type) {
		case 'SORT': {
			let newState = [...state]
			if (action.payload === 'up') {
				return newState.sort((a, b) => a.name === b.name ? 0 : a.name > b.name ? 1 : -1)
			}
			if (action.payload === 'down') {
				return newState.sort((a, b) => a.name === b.name ? 0 : a.name > b.name ? -1 : 1)
			}
			return state
		}
		case 'CHECK-AGE': {
			return state.filter(f => f.age >= action.payload)
		}
		default:
			return state
	}
}