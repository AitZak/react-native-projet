import React from 'react';
import {Text, View, Vibration} from "react-native";
import { Camera } from 'expo-camera';

class ScanScreen extends React.Component {

    _focusListener = null;
    _blurListener = null;

    constructor(props){
        super(props)
        this.state = {
            hasPermission: null,
            hasScanned: null,
            isFocused: true
        }
    }

    async componentDidMount(){
        const { status } = await Camera.requestPermissionsAsync();
        this.setState({
            hasPermission: status === 'granted'
        })

        this._focusListener = this.props.navigation.addListener('focus', () => {
            this.setState({ isFocused: true });
        });

        this._blurListener = this.props.navigation.addListener('blur', () => {
            this.setState({ isFocused: false });
        });

    }

    componentWillUnmount() {
        if (this._focusListener) {
            this._focusListener = null;
        }

        if (this._blurListener) {
            this._blurListener = null;
        }
    }

    handleBarcode = ({ type, data }) => {
        this.setState({
            hasScanned: true
        })

        Vibration.vibrate()

        return fetch(`https://world.openfoodfacts.org/api/v0/products/${data}.json`)
            .then((response) => response.json())
            .then((json) => {
                this.props.navigation.navigate('Product',{
                    item: json.product
                })
            })
            .catch((error) => {
                console.error(error);
            });

    }

    render() {

        if (this.state.hasPermission === null) {
            return <View/>;
        }
        if (this.state.hasPermission === false) {
            return <View><Text>No access to camera</Text></View>
        }

        else if (this.state.isFocused)
        {
            return (
                <View style={{flex: 1}}>
                    <Text>Scan screen</Text>
                    <Camera
                        style={{ flex: 1 }}
                        type={Camera.Constants.Type.back}
                        onBarCodeScanned={this.state.hasScanned ? undefined : this.handleBarcode}
                        useCamera2Api={true}
                    >
                    </Camera>
                </View>
            )
        }

        return null

    }
}

export default ScanScreen;