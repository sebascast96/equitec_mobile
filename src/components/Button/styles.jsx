import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#000000",
		padding: 10,
		borderRadius: 5,
	},
	text:{
		color: '#FFFFFF',
		fontSize: 17,
	},
	buttonDisabled: {
		color: "white",
		alignItems: "center",
		backgroundColor: "#DDD",
		padding: 10,
		borderRadius: 5,
	},
	countContainer: {
		alignItems: "center",
		padding: 10,
	},
});

export default styles;