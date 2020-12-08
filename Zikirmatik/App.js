import React, {Component} from 'react';
import {StyleSheet, View, Button, Text,Vibration,ImageBackground,Alert, TouchableWithoutFeedback} from 'react-native';

 const image = { uri: "https://lh3.googleusercontent.com/l57ou4SggWlU-x99yt6TR5wAt95sKkIlkkwFl49RJp6R_FlgzmDNcl2XOL0o-T928D8" };

export default class App extends Component {
	state = {
    number: 0,
    dua:"elhamdülillah"
	};

	onPressIncrease = () => {
    if(this.state.number<99){
    this.setState({    
			number: ++this.state.number,
    });}
    else{
      Alert.alert('Veladdalin Amin','Allah Kabul Etsin.');
    }
    if(this.state.number==33 || this.state.number==66 || this.state.number==99)
    {
      Vibration.vibrate(500)
    }

    if(this.state.number>33)
    {
      this.setState({
dua:"subhanallah"
      });
    }
    if (this.state.number>66)
    {
      this.setState({
        dua:"AllahuEkber"
    });
    }
	};

	onPressReset = () => {
		this.setState({
      number: 0,
      dua:"elhamdülillah"
		});
	};

	render() {
		return (
			<View style={styles.container}>
          <ImageBackground source={image} style={styles.image}> 
				<View>
					<Text style={styles.number}>{this.state.number}</Text>
				</View>
				<View style={styles.buttons}>
        <Button
            title={this.state.dua}
            color='#000'
						onPress={this.onPressIncrease}
					/>
          <Button
						title='Sıfırla'
						color='#000'
						onPress={this.onPressReset}
					/> 
				</View>
        </ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    flex:1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems:'center'
  },
	buttons: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
	},
	number: {
    fontSize: 44,
    color:'white',
  },

});