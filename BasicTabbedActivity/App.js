import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Dimensions} from 'react-native';

const { width } = Dimensions.get('window'); 

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					pagingEnabled={true}
					horizontal={true}
				>
					<Text style={styles.title}>1</Text>
					<Text style={styles.title}>2</Text>
					<Text style={styles.title}>3</Text>
					<Text style={styles.title}>4</Text>
					<Text style={styles.title}>5</Text>
					<Text style={styles.title}>6</Text>
					<Text style={styles.title}>7</Text>
					<Text style={styles.title}>8</Text>
					<Text style={styles.title}>9</Text>
					<Text style={styles.title}>10</Text>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
		flexDirection: 'row',
	},
	title: {
		backgroundColor: 'gray',
		marginVertical: 30,
		textAlign: 'center',
		paddingVertical: 60,
    fontSize: 36,
    width: width               
	}
});