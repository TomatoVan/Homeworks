export type ThemesType = 'dark' | 'red' | 'some'
type changeThemeCType = {
	type: "CHANGE-THEME"
	selectedTheme: ThemesType
}

const initState: ThemesType = 'dark'


export const themeReducer = (state = initState, action: changeThemeCType): ThemesType => {
	switch (action.type) {
		case 'CHANGE-THEME': {
			return action.selectedTheme
		}
		default:
			return state;
	}
};

export const changeThemeC = (selectedTheme: ThemesType) => ({type: 'CHANGE-THEME', selectedTheme} as const);