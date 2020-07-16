//
//  App.js
//  Dwellcome_dash
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import * as Font from "expo-font"
import DashboardAddresses from "./App/DashboardAddresses/DashboardAddresses"
import React from "react"
import { AppLoading, DangerZone } from "expo"
import { createAppContainer, createStackNavigator } from "react-navigation"

const PushRouteOne = createStackNavigator({
	DashboardAddresses: {
		screen: DashboardAddresses,
	},
}, {
	initialRouteName: "DashboardAddresses",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			"GothamRounded-Book": require("./assets/fonts/GothamRoundedBook21018.ttf"),
			"Averta-Regular": require("./assets/fonts/AvertaRegular.otf"),
			"Averta-Bold": require("./assets/fonts/AvertaBold.otf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}
