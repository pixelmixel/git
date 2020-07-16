//
//  DashboardAddresses
//  Dwellcome_dash
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class DashboardAddresses extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onMenuPressed = () => {
	
	}

	onSelectTwoPressed = () => {
	
	}

	onSelectPressed = () => {
	
	}

	onDeletePressed = () => {
	
	}

	onGroup452Pressed = () => {
	
	}

	onGroup451Pressed = () => {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 1074,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 5,
							right: 382,
							top: 37,
							height: 1037,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.sidebarView}>
							<View
								style={styles.group1042View}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<View
										style={styles.navigationView}>
										<View
											pointerEvents="box-none"
											style={{
												height: 320,
												marginRight: 1,
											}}>
											<View
												style={styles.dropdownView}>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														right: 0,
														top: 0,
														bottom: 0,
														justifyContent: "center",
													}}>
													<Text
														style={styles.instagramText}>Banyan Mortgage {"\n"}Group</Text>
												</View>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														left: 0,
														top: 0,
														bottom: 0,
														justifyContent: "center",
													}}>
													<Image
														source={require("./../../assets/images/group-1085.png")}
														style={styles.group1085Image}/>
												</View>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													right: 0,
													top: 43,
													height: 277,
													alignItems: "flex-start",
												}}>
												<Text
													style={styles.mainNavigationText}>MAIN NAVIGATIO</Text>
												<View
													style={styles.navigationMenuView}>
													<View
														style={styles.componentNavigationView}>
														<View
															pointerEvents="box-none"
															style={{
																position: "absolute",
																left: 0,
																right: 0,
																top: 0,
																bottom: 0,
																justifyContent: "center",
															}}>
															<View
																style={styles.activeView}/>
														</View>
														<View
															pointerEvents="box-none"
															style={{
																position: "absolute",
																left: 0,
																top: 0,
																bottom: 0,
																justifyContent: "center",
															}}>
															<View
																pointerEvents="box-none"
																style={{
																	width: 88,
																	height: 20,
																	marginLeft: 31,
																	flexDirection: "row",
																	alignItems: "center",
																}}>
																<Image
																	source={require("./../../assets/images/icons-dashboard-2.png")}
																	style={styles.iconsDashboardImage}/>
																<TouchableOpacity
																	onPress={this.onMenuPressed}
																	style={styles.menuButton}>
																	<Text
																		style={styles.menuButtonText}>Listings</Text>
																</TouchableOpacity>
															</View>
														</View>
													</View>
													<View
														style={styles.componentNavigationFourView}>
														<Image
															source={require("./../../assets/images/icons-dashboard-7.png")}
															style={styles.iconsDashboardFourImage}/>
														<Text
															style={styles.menuThreeText}>Clients</Text>
													</View>
													<View
														style={styles.componentNavigationTwoView}>
														<Image
															source={require("./../../assets/images/icons-dashboard-6.png")}
															style={styles.iconsDashboardTwoImage}/>
														<Text
															style={styles.menuText}>Welcome Kits</Text>
													</View>
													<View
														style={{
															flex: 1,
														}}/>
													<View
														pointerEvents="box-none"
														style={{
															height: 50,
														}}>
														<View
															style={styles.componentNavigationThreeView}>
															<Image
																source={require("./../../assets/images/icons-dashboard.png")}
																style={styles.iconsDashboardThreeImage}/>
															<Text
																style={styles.menuTwoText}>Employees</Text>
														</View>
														<View
															style={styles.componentNavigationFiveView}>
															<Image
																source={require("./../../assets/images/icons-dashboard-4.png")}
																style={styles.iconsDashboardFiveImage}/>
															<Text
																style={styles.menuFourText}>Settings</Text>
														</View>
													</View>
												</View>
											</View>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.supportText}>SUPPORT</Text>
										<View
											style={styles.supportView}>
											<View
												style={styles.componentNavigationSixView}>
												<Image
													source={require("./../../assets/images/icons-dashboard-3.png")}
													style={styles.iconsDashboardSixImage}/>
												<Text
													style={styles.menuFiveText}>Knowledgebase</Text>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.componentNavigationSevenView}>
												<Image
													source={require("./../../assets/images/icons-dashboard-5.png")}
													style={styles.iconsDashboardSevenImage}/>
												<Text
													style={styles.menuSixText}>Help</Text>
											</View>
										</View>
									</View>
								</View>
								<View
									style={styles.componentNavigationEightView}>
									<Image
										source={require("./../../assets/images/icons-dashboard-8.png")}
										style={styles.iconsDashboardEightImage}/>
									<Text
										style={styles.menuSevenText}>Branding</Text>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.labelText}>Dashboard</Text>
					</View>
					<View
						style={styles.contentView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 61,
								height: 515,
							}}>
							<View
								style={styles.headerView}>
								<View
									pointerEvents="box-none"
									style={{
										height: 37,
										marginLeft: 74,
										marginRight: 62,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.mediaLibraryText}>Addresses</Text>
									<Text
										style={styles.mediaItemsText}>(12 Street Addresses)</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<TouchableOpacity
										onPress={this.onSelectPressed}
										style={styles.selectTwoButton}>
										<Text
											style={styles.selectTwoButtonText}>Edit</Text>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={this.onSelectTwoPressed}
										style={styles.selectButton}>
										<Text
											style={styles.selectButtonText}>Select All</Text>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={this.onDeletePressed}
										style={styles.deleteButton}>
										<Image
											source={require("./../../assets/images/icons-recyle-bin.png")}
											style={styles.deleteButtonImage}/>
										<Text
											style={styles.deleteButtonText}>Delete</Text>
									</TouchableOpacity>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/border-2.png")}
									style={styles.borderImage}/>
							</View>
							<View
								style={styles.mediaView}>
								<View
									style={styles.headerTwoView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<View
											pointerEvents="box-none"
											style={{
												height: 18,
												marginLeft: 75,
												marginRight: 42,
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Text
												style={styles.mediaText}>Street Address</Text>
											<Image
												source={require("./../../assets/images/combined-shape.png")}
												style={styles.combinedShapeFiveImage}/>
											<View
												style={styles.groupThreeView}>
												<Text
													style={styles.labelsThreeText}>Unit #</Text>
												<Image
													source={require("./../../assets/images/combined-shape.png")}
													style={styles.combinedShapeFourImage}/>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.groupTwoView}>
												<Text
													style={styles.labelsTwoText}>Neighbourhood</Text>
												<Image
													source={require("./../../assets/images/combined-shape.png")}
													style={styles.combinedShapeThreeImage}/>
											</View>
											<View
												style={styles.group951View}>
												<Text
													style={styles.labelsText}>Labels</Text>
												<Image
													source={require("./../../assets/images/combined-shape.png")}
													style={styles.combinedShapeTwoImage}/>
											</View>
											<View
												style={styles.groupView}>
												<Text
													style={styles.uploadDateText}>Edited Date</Text>
												<View
													style={{
														flex: 1,
													}}/>
												<Image
													source={require("./../../assets/images/combined-shape-2.png")}
													style={styles.combinedShapeImage}/>
											</View>
										</View>
									</View>
									<Image
										source={require("./../../assets/images/border.png")}
										style={styles.borderTwoImage}/>
								</View>
								<View
									style={styles.bodyView}>
									<View
										style={styles.itemView}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													height: 32,
													marginLeft: 25,
													marginRight: 73,
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source={require("./../../assets/images/icon.png")}
													style={styles.iconImage}/>
												<View
													style={{
														flex: 1,
													}}/>
												<View
													style={styles.labelView}>
													<View
														style={styles.baseView}/>
													<View
														style={{
															flex: 1,
														}}/>
													<Text
														style={styles.thinkingText}>Townhouse</Text>
												</View>
												<Text
													style={styles.apr252019Text}>Apr 25, 2019</Text>
											</View>
										</View>
										<Image
											source={require("./../../assets/images/border-3.png")}
											style={styles.borderThreeImage}/>
									</View>
									<View
										style={styles.itemTwoView}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													height: 32,
													marginLeft: 25,
													marginRight: 73,
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source={require("./../../assets/images/icon.png")}
													style={styles.iconTwoImage}/>
												<View
													style={{
														flex: 1,
													}}/>
												<View
													style={styles.labelTwoView}>
													<View
														style={styles.baseTwoView}/>
													<Text
														style={styles.creativeText}>House</Text>
												</View>
												<Text
													style={styles.apr262019Text}>Apr 26, 2019</Text>
											</View>
										</View>
										<Image
											source={require("./../../assets/images/border-3.png")}
											style={styles.borderFourImage}/>
									</View>
									<View
										style={styles.itemThreeView}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													height: 32,
													marginLeft: 25,
													marginRight: 73,
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source={require("./../../assets/images/icon.png")}
													style={styles.iconThreeImage}/>
												<View
													style={{
														flex: 1,
													}}/>
												<View
													style={styles.labelThreeView}>
													<View
														style={styles.baseThreeView}/>
													<Text
														style={styles.imagineText}>Cottage</Text>
												</View>
												<Text
													style={styles.apr282019Text}>Apr 28, 2019</Text>
											</View>
										</View>
										<Image
											source={require("./../../assets/images/border-3.png")}
											style={styles.borderFiveImage}/>
									</View>
									<View
										style={styles.itemFourView}>
										<View
											style={styles.labelFiveView}>
											<View
												style={styles.baseFiveView}/>
											<Text
												style={styles.workingTwoText}>Condo</Text>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												width: 279,
												height: 32,
												marginRight: 73,
												marginTop: 34,
												flexDirection: "row",
												justifyContent: "flex-end",
												alignItems: "flex-start",
											}}>
											<View
												style={styles.labelFourView}>
												<View
													style={styles.baseFourView}/>
												<Text
													style={styles.workingText}>Condo</Text>
											</View>
											<Text
												style={styles.apr282019TwoText}>Apr 28, 2019</Text>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												alignSelf: "flex-start",
												width: 294,
												height: 40,
												marginLeft: 25,
												flexDirection: "row",
												alignItems: "flex-start",
											}}>
											<Image
												source={require("./../../assets/images/icon.png")}
												style={styles.iconFourImage}/>
											<Text
												style={styles.abstractMaterialPuText}>22 Yonge Street, {"\n"}</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Image
											source={require("./../../assets/images/border-3.png")}
											style={styles.borderSixImage}/>
									</View>
									<View
										style={styles.itemFiveView}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													height: 40,
													marginLeft: 25,
													marginRight: 73,
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source={require("./../../assets/images/icon.png")}
													style={styles.iconFiveImage}/>
												<Text
													style={styles.abstractColorfulPnText}>22 Yonge Street,</Text>
												<Text
													style={styles.creativeTwoText}>1402</Text>
												<View
													style={{
														flex: 1,
													}}/>
												<Text
													style={styles.apr282019ThreeText}>Apr 28, 2019</Text>
											</View>
										</View>
										<Image
											source={require("./../../assets/images/border-3.png")}
											style={styles.borderSevenImage}/>
									</View>
									<View
										style={styles.itemSixView}>
										<View
											pointerEvents="box-none"
											style={{
												alignSelf: "stretch",
												height: 66,
											}}>
											<Image
												source={require("./../../assets/images/base.png")}
												style={styles.baseImage}/>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 25,
													right: 187,
													top: 10,
													height: 46,
													flexDirection: "row",
													alignItems: "flex-start",
												}}>
												<Image
													source={require("./../../assets/images/icon.png")}
													style={styles.iconSixImage}/>
												<Image
													source={require("./../../assets/images/image.png")}
													style={styles.imageImage}/>
												<Text
													style={styles.aCupOfCoffeePngText}>1418 Kimberley Drive,</Text>
												<View
													style={{
														flex: 1,
													}}/>
												<Text
													style={styles.creativeFourText}>Falgarwood</Text>
												<View
													style={styles.labelSixView}>
													<View
														style={styles.baseSixView}/>
													<Text
														style={styles.creativeThreeText}>House</Text>
												</View>
												<Text
													style={styles.apr282019FourText}>Apr 28, 2019</Text>
											</View>
										</View>
										<Image
											source={require("./../../assets/images/border-3.png")}
											style={styles.borderEightImage}/>
										<View
											style={styles.labelSevenView}>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													right: 0,
													top: 0,
													bottom: 0,
												}}>
												<Text
													style={styles.creativeFiveText}>Bay Street Corridor</Text>
												<Text
													style={styles.creativeSixText}>Bay Street Corridor</Text>
												<Text
													style={styles.creativeEightText}>Joshua's Creek</Text>
												<View
													style={{
														flex: 1,
													}}/>
												<Text
													style={styles.creativeNineText}>Downtown</Text>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													right: 0,
													top: 0,
													bottom: 0,
													justifyContent: "center",
												}}>
												<Text
													style={styles.creativeSevenText}>Bracebridge</Text>
											</View>
										</View>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 171,
											width: 342,
											top: 159,
											bottom: 16,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.creativeTenText}>1101</Text>
										<View
											pointerEvents="box-none"
											style={{
												width: 342,
												height: 40,
												marginTop: 37,
												flexDirection: "row",
												alignItems: "flex-start",
											}}>
											<Text
												style={styles.abstractMaterialPuTwoText}>92 Rice Lake Road, {"\n"}</Text>
											<Text
												style={styles.creativeElevenText}>The PATH -{"\n"}Financial Building</Text>
										</View>
										<Text
											style={styles.abstractMaterialPuThreeText}>132 Glenada Crescent, {"\n"}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.abstractMaterialPuFourText}>1 Main Street{"\n"}</Text>
									</View>
								</View>
								<View
									style={styles.scrollPositionView}/>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/divider.png")}
								style={styles.dividerImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 115,
							top: 0,
							height: 618,
							alignItems: "flex-start",
						}}>
						<View
							style={styles.group1097View}>
							<View
								style={styles.logoView}>
								<View
									style={styles.group435View}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<Image
											source={require("./../../assets/images/group-211.png")}
											style={styles.group211Image}/>
									</View>
									<Image
										source={require("./../../assets/images/group-212.png")}
										style={styles.group212Image}/>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<Image
											source={require("./../../assets/images/group-213.png")}
											style={styles.group213Image}/>
									</View>
								</View>
								<Text
									style={styles.dwellcomeText}>dwellcome</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={this.onGroup452Pressed}
								style={styles.group452Button}>
								<Text
									style={styles.group452ButtonText}>Create Listing</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={this.onGroup451Pressed}
								style={styles.group451Button}/>
						</View>
						<View
							style={styles.ellipse9View}/>
						<Image
							source={require("./../../assets/images/base-2.png")}
							style={styles.baseTwoImage}/>
						<Image
							source={require("./../../assets/images/base-2.png")}
							style={styles.baseThreeImage}/>
						<Image
							source={require("./../../assets/images/base-2.png")}
							style={styles.baseFourImage}/>
						<Image
							source={require("./../../assets/images/base-2.png")}
							style={styles.baseFiveImage}/>
						<Image
							source={require("./../../assets/images/base-2.png")}
							style={styles.baseSixImage}/>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.footersFooter7View}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<Image
							source={require("./../../assets/images/background.png")}
							style={styles.backgroundImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 125,
							right: 139,
							top: 29,
							height: 20,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.froalaAllRText}>© 2020 Dwellcome Inc. All Rights Reserved</Text>
						<Text
							style={styles.homeText}>Home</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.featuresText}>Features</Text>
						<Text
							style={styles.privacyPolicyText}>Privacy Policy</Text>
						<Text
							style={styles.termsText}>Terms</Text>
						<Text
							style={styles.aboutText}>About</Text>
						<Text
							style={styles.aboutTwoText}>FAQs</Text>
						<View
							style={styles.socialGroupView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										height: 16,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source={require("./../../assets/images/icons-social-twitter.png")}
										style={styles.iconsSocialTwitterImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/icons-social-instagram.png")}
										style={styles.iconsSocialInstagrImage}/>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									alignSelf: "center",
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/icons-social-facebook.png")}
									style={styles.iconsSocialFacebooImage}/>
							</View>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	sidebarView: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.04)",
		shadowRadius: 25,
		shadowOpacity: 1,
		width: 251,
		height: 1031,
		marginTop: 6,
	},
	group1042View: {
		backgroundColor: "transparent",
		height: 582,
		marginTop: 32,
	},
	navigationView: {
		backgroundColor: "transparent",
		height: 582,
	},
	dropdownView: {
		backgroundColor: "rgb(251, 253, 255)",
		opacity: 0,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: "rgb(233, 237, 240)",
		borderStyle: "solid",
		shadowColor: "rgba(0, 0, 0, 0.28)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 17,
		right: 13,
		top: 0,
		height: 86,
	},
	instagramText: {
		color: "rgb(24, 59, 86)",
		fontFamily: "Averta-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		backgroundColor: "transparent",
		marginRight: 19,
	},
	group1085Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 66,
		height: 46,
		marginLeft: 18,
	},
	mainNavigationText: {
		color: "rgb(100, 98, 98)",
		fontFamily: "Averta-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 1.09,
		backgroundColor: "transparent",
		marginLeft: 31,
	},
	navigationMenuView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 252,
		marginTop: 10,
	},
	componentNavigationView: {
		backgroundColor: "transparent",
		height: 50,
	},
	activeView: {
		backgroundColor: "rgb(246, 247, 249)",
		borderRadius: 6,
		height: 36,
		marginLeft: 15,
		marginRight: 11,
	},
	iconsDashboardImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 17,
		height: 17,
	},
	menuButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	menuButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 56,
		height: 20,
		marginLeft: 15,
	},
	menuButtonText: {
		color: "rgb(0, 157, 255)",
		fontFamily: "Averta-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	componentNavigationFourView: {
		backgroundColor: "transparent",
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},
	iconsDashboardFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 17,
		height: 17,
		marginLeft: 31,
	},
	menuThreeText: {
		color: "rgb(24, 59, 86)",
		fontFamily: "Averta-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 15,
	},
	componentNavigationTwoView: {
		backgroundColor: "transparent",
		opacity: 0,
		height: 50,
		marginTop: 52,
		flexDirection: "row",
		alignItems: "center",
	},
	iconsDashboardTwoImage: {
		backgroundColor: "transparent",
		opacity: 0.5,
		resizeMode: "center",
		width: 17,
		height: 17,
		marginLeft: 31,
	},
	menuText: {
		color: "rgb(24, 59, 86)",
		fontFamily: "Averta-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.5,
		marginLeft: 15,
	},
	componentNavigationThreeView: {
		backgroundColor: "transparent",
		opacity: 0,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},
	iconsDashboardThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 14,
		height: 20,
		marginLeft: 31,
	},
	menuTwoText: {
		color: "rgb(24, 59, 86)",
		fontFamily: "Averta-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 18,
	},
	componentNavigationFiveView: {
		backgroundColor: "transparent",
		opacity: 0,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},
	iconsDashboardFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 17,
		height: 17,
		marginLeft: 31,
	},
	menuFourText: {
		backgroundColor: "transparent",
		color: "rgb(24, 59, 86)",
		fontFamily: "Averta-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 15,
	},
	supportText: {
		backgroundColor: "transparent",
		opacity: 0,
		color: "rgb(100, 98, 98)",
		fontFamily: "Averta-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 1.09,
		alignSelf: "flex-start",
		marginLeft: 31,
		marginBottom: 10,
	},
	supportView: {
		backgroundColor: "transparent",
		opacity: 0,
		height: 100,
		marginLeft: 1,
	},
	componentNavigationSixView: {
		backgroundColor: "transparent",
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},
	iconsDashboardSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 15,
		height: 16,
		marginLeft: 32,
	},
	menuFiveText: {
		backgroundColor: "transparent",
		color: "rgb(24, 59, 86)",
		fontFamily: "Averta-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 16,
	},
	componentNavigationSevenView: {
		backgroundColor: "transparent",
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},
	iconsDashboardSevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 17,
		marginLeft: 31,
	},
	menuSixText: {
		color: "rgb(24, 59, 86)",
		fontFamily: "Averta-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 16,
	},
	componentNavigationEightView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 1,
		top: 168,
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},
	iconsDashboardEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 17,
		height: 17,
		marginLeft: 31,
	},
	menuSevenText: {
		color: "rgb(24, 59, 86)",
		fontFamily: "Averta-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 15,
	},
	labelText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	contentView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 1305,
		top: 54,
		height: 981,
	},
	headerView: {
		backgroundColor: "transparent",
		opacity: 0.9,
		position: "absolute",
		left: 0,
		width: 1190,
		top: 0,
		height: 66,
	},
	mediaLibraryText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Bold",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.38,
	},
	mediaItemsText: {
		backgroundColor: "transparent",
		color: "rgb(24, 59, 86)",
		fontFamily: "Averta-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 18,
		marginTop: 11,
	},
	selectTwoButtonText: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Bold",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	selectTwoButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	selectTwoButton: {
		backgroundColor: "rgb(251, 253, 255)",
		borderRadius: 6,
		borderWidth: 1,
		borderColor: "rgb(233, 237, 240)",
		borderStyle: "solid",
		shadowColor: "rgba(0, 0, 0, 0.33)",
		shadowRadius: 6,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 97,
		height: 36,
		marginRight: 19,
		marginTop: 1,
	},
	selectButtonText: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Bold",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	selectButton: {
		backgroundColor: "rgb(251, 253, 255)",
		borderRadius: 6,
		borderWidth: 1,
		borderColor: "rgb(233, 237, 240)",
		borderStyle: "solid",
		shadowColor: "rgba(0, 0, 0, 0.33)",
		shadowRadius: 6,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 97,
		height: 36,
		marginRight: 19,
		marginTop: 1,
	},
	selectButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	deleteButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	deleteButton: {
		backgroundColor: "rgb(251, 253, 255)",
		borderRadius: 6,
		borderWidth: 1,
		borderColor: "rgb(233, 237, 240)",
		borderStyle: "solid",
		shadowColor: "rgba(0, 0, 0, 0.33)",
		shadowRadius: 6,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 101,
		height: 36,
		marginTop: 1,
	},
	deleteButtonText: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Bold",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	borderImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 2,
	},
	mediaView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 64,
		height: 451,
	},
	headerTwoView: {
		backgroundColor: "transparent",
		opacity: 0.8,
		position: "absolute",
		left: 25,
		width: 1166,
		top: 0,
		height: 49,
	},
	mediaText: {
		backgroundColor: "transparent",
		color: "rgb(94, 108, 132)",
		fontFamily: "Averta-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	combinedShapeFiveImage: {
		backgroundColor: "transparent",
		opacity: 0.75,
		resizeMode: "center",
		width: 6,
		height: 12,
		marginLeft: 12,
	},
	groupThreeView: {
		backgroundColor: "transparent",
		width: 59,
		height: 17,
		marginLeft: 201,
		flexDirection: "row",
		alignItems: "center",
	},
	labelsThreeText: {
		backgroundColor: "transparent",
		color: "rgb(94, 108, 132)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		flex: 1,
		marginRight: 12,
	},
	combinedShapeFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.75,
		width: 6,
		height: 12,
	},
	groupTwoView: {
		backgroundColor: "transparent",
		width: 121,
		height: 17,
		marginRight: 117,
		flexDirection: "row",
		alignItems: "center",
	},
	labelsTwoText: {
		backgroundColor: "transparent",
		color: "rgb(94, 108, 132)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		flex: 1,
		marginRight: 12,
	},
	combinedShapeThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.75,
		width: 6,
		height: 12,
	},
	group951View: {
		backgroundColor: "transparent",
		width: 63,
		height: 17,
		marginRight: 123,
		flexDirection: "row",
		alignItems: "center",
	},
	labelsText: {
		backgroundColor: "transparent",
		color: "rgb(94, 108, 132)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		flex: 1,
		marginRight: 13,
	},
	combinedShapeTwoImage: {
		backgroundColor: "transparent",
		opacity: 0.75,
		resizeMode: "center",
		width: 6,
		height: 12,
	},
	groupView: {
		backgroundColor: "transparent",
		width: 109,
		height: 17,
		flexDirection: "row",
		alignItems: "center",
	},
	uploadDateText: {
		backgroundColor: "transparent",
		color: "rgb(94, 108, 132)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	combinedShapeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.75,
		width: 6,
		height: 12,
	},
	borderTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 1,
		width: 1134,
		bottom: 0,
		height: 2,
	},
	bodyView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 48,
		height: 403,
	},
	itemView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 1191,
		bottom: 0,
		height: 68,
	},
	iconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 22,
		height: 22,
	},
	labelView: {
		backgroundColor: "rgba(255, 169, 88, 0.1)",
		borderRadius: 6,
		width: 121,
		height: 32,
		marginRight: 79,
		flexDirection: "row",
		alignItems: "center",
	},
	baseView: {
		backgroundColor: "rgb(255, 169, 88)",
		borderRadius: 3,
		width: 13,
		height: 12,
		marginLeft: 10,
	},
	thinkingText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 16,
	},
	apr252019Text: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	borderThreeImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.75,
		position: "absolute",
		left: 1,
		right: 0,
		bottom: 0,
		height: 2,
	},
	itemTwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 1191,
		top: 268,
		height: 68,
	},
	iconTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 22,
		height: 22,
	},
	labelTwoView: {
		backgroundColor: "rgba(100, 200, 188, 0.1)",
		borderRadius: 6,
		width: 121,
		height: 32,
		marginRight: 79,
		flexDirection: "row",
		alignItems: "center",
	},
	baseTwoView: {
		backgroundColor: "rgb(100, 200, 188)",
		borderRadius: 3,
		width: 13,
		height: 12,
		marginLeft: 10,
	},
	creativeText: {
		color: "rgb(52, 69, 99)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 7,
	},
	apr262019Text: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	borderFourImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.75,
		position: "absolute",
		left: 1,
		right: 0,
		bottom: 0,
		height: 2,
	},
	itemThreeView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 1191,
		top: 201,
		height: 68,
	},
	iconThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 22,
		height: 22,
	},
	labelThreeView: {
		backgroundColor: "rgba(255, 138, 138, 0.1)",
		borderRadius: 6,
		width: 121,
		height: 32,
		marginRight: 79,
		flexDirection: "row",
		alignItems: "center",
	},
	baseThreeView: {
		backgroundColor: "rgb(255, 138, 138)",
		borderRadius: 3,
		width: 13,
		height: 12,
		marginLeft: 10,
	},
	imagineText: {
		color: "rgb(52, 69, 99)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 8,
	},
	apr282019Text: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	borderFiveImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.75,
		position: "absolute",
		left: 1,
		right: 0,
		bottom: 0,
		height: 2,
	},
	itemFourView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 1191,
		top: 85,
		height: 117,
		alignItems: "flex-end",
	},
	labelFiveView: {
		backgroundColor: "rgba(101, 84, 192, 0.1)",
		borderRadius: 6,
		width: 121,
		height: 32,
		marginRight: 231,
		flexDirection: "row",
		alignItems: "center",
	},
	baseFiveView: {
		backgroundColor: "rgb(101, 84, 192)",
		borderRadius: 3,
		width: 13,
		height: 12,
		marginLeft: 9,
	},
	workingTwoText: {
		color: "rgb(52, 69, 99)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 8,
	},
	labelFourView: {
		backgroundColor: "rgba(101, 84, 192, 0.1)",
		borderRadius: 6,
		width: 121,
		height: 32,
		marginRight: 79,
		flexDirection: "row",
		alignItems: "center",
	},
	baseFourView: {
		backgroundColor: "rgb(101, 84, 192)",
		borderRadius: 3,
		width: 13,
		height: 12,
		marginLeft: 9,
	},
	workingText: {
		color: "rgb(52, 69, 99)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 8,
	},
	apr282019TwoText: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 10,
	},
	iconFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 22,
		height: 22,
		marginTop: 10,
	},
	abstractMaterialPuText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		marginLeft: 124,
	},
	borderSixImage: {
		backgroundColor: "transparent",
		opacity: 0.75,
		resizeMode: "cover",
		alignSelf: "stretch",
		width: null,
		height: 2,
		marginLeft: 1,
	},
	itemFiveView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 1191,
		top: 67,
		height: 68,
	},
	iconFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 22,
		height: 22,
	},
	abstractColorfulPnText: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		backgroundColor: "transparent",
		marginLeft: 124,
	},
	creativeTwoText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 103,
	},
	apr282019ThreeText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	borderSevenImage: {
		backgroundColor: "transparent",
		opacity: 0.75,
		resizeMode: "cover",
		position: "absolute",
		left: 1,
		right: 0,
		bottom: 0,
		height: 2,
	},
	itemSixView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 377,
		alignItems: "flex-end",
	},
	baseImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 66,
	},
	iconSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 22,
		height: 22,
		marginTop: 12,
	},
	imageImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 52,
		height: 46,
		marginLeft: 29,
	},
	aCupOfCoffeePngText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		marginLeft: 43,
		marginTop: 2,
	},
	creativeFourText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 136,
		marginTop: 14,
	},
	labelSixView: {
		backgroundColor: "rgba(100, 200, 188, 0.1)",
		borderRadius: 6,
		width: 126,
		height: 32,
		marginRight: 73,
		marginTop: 7,
		flexDirection: "row",
		alignItems: "center",
	},
	baseSixView: {
		backgroundColor: "rgb(100, 200, 188)",
		borderRadius: 3,
		width: 13,
		height: 12,
		marginLeft: 8,
	},
	creativeThreeText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 7,
	},
	apr282019FourText: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 17,
	},
	borderEightImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.75,
		alignSelf: "flex-start",
		width: 1190,
		height: 2,
		marginLeft: 1,
	},
	labelSevenView: {
		backgroundColor: "transparent",
		width: 126,
		height: 285,
		marginRight: 573,
		marginTop: 24,
	},
	creativeFiveText: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	creativeSixText: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 50,
	},
	creativeEightText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 17,
		marginRight: 11,
		marginTop: 117,
	},
	creativeNineText: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 25,
	},
	creativeSevenText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 19,
	},
	creativeTenText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 253,
	},
	abstractMaterialPuTwoText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
	},
	creativeElevenText: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 47,
		marginTop: 4,
	},
	abstractMaterialPuThreeText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Bold",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 20,
		marginTop: 27,
	},
	abstractMaterialPuFourText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
	},
	scrollPositionView: {
		backgroundColor: "rgb(52, 69, 99)",
		borderRadius: 4,
		position: "absolute",
		right: 120,
		width: 8,
		top: 63,
		height: 60,
	},
	dividerImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 2,
		height: 981,
		marginRight: 113,
	},
	group1097View: {
		backgroundColor: "rgb(254, 255, 255)",
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 50,
		shadowOpacity: 1,
		alignSelf: "stretch",
		height: 55,
		flexDirection: "row",
		alignItems: "center",
	},
	logoView: {
		backgroundColor: "transparent",
		width: 143,
		height: 28,
		marginLeft: 31,
		flexDirection: "row",
		alignItems: "center",
	},
	group435View: {
		backgroundColor: "transparent",
		width: 22,
		height: 22,
	},
	group211Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 22,
	},
	group212Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 4,
		right: 3,
		top: 7,
		height: 14,
	},
	group213Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 3,
		marginLeft: 14,
		marginRight: 5,
	},
	dwellcomeText: {
		backgroundColor: "transparent",
		color: "rgb(24, 59, 86)",
		fontFamily: "GothamRounded-Book",
		fontSize: 23,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group452Button: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 116,
		height: 41,
		marginRight: 33,
	},
	group452ButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	group452ButtonText: {
		color: "white",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group451Button: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 51,
		height: 32,
		marginRight: 138,
	},
	group451ButtonImage: {
		resizeMode: "contain",
	},
	group451ButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	ellipse9View: {
		backgroundColor: "rgb(52, 69, 99)",
		borderRadius: 6,
		width: 12,
		height: 12,
		marginLeft: 285,
		marginTop: 199,
	},
	baseTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 52,
		height: 46,
		marginLeft: 331,
		marginTop: 38,
	},
	baseThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 52,
		height: 46,
		marginLeft: 331,
		marginTop: 21,
	},
	baseFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 52,
		height: 46,
		marginLeft: 331,
		marginTop: 21,
	},
	baseFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 52,
		height: 46,
		marginLeft: 331,
		marginTop: 21,
	},
	baseSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 52,
		height: 46,
		marginLeft: 331,
		marginTop: 21,
	},
	footersFooter7View: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 1366,
		height: 85,
		marginBottom: 13,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 85,
	},
	froalaAllRText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.35,
		alignSelf: "center",
	},
	homeText: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 183,
		marginTop: 2,
	},
	featuresText: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 28,
		marginTop: 2,
	},
	privacyPolicyText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 12,
		marginTop: 2,
	},
	termsText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 21,
		marginTop: 2,
	},
	aboutText: {
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 21,
		marginTop: 2,
	},
	aboutTwoText: {
		backgroundColor: "transparent",
		color: "rgb(52, 69, 99)",
		fontFamily: "Averta-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 161,
		marginTop: 2,
	},
	socialGroupView: {
		backgroundColor: "transparent",
		width: 60,
		height: 16,
	},
	iconsSocialTwitterImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 16,
	},
	iconsSocialInstagrImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 16,
	},
	iconsSocialFacebooImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 16,
		height: 16,
	},
})
