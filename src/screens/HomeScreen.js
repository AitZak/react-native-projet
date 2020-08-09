import React from 'react';
import { Text, View, FlatList, Button} from "react-native";
import { Icon } from 'react-native-elements'
import ListItem from "./ListItem";


class HomeScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            DATA: false
        }
    }

    componentDidMount(){

        return fetch('https://fr-en.openfoodfacts.org/category/pizzas/1.json')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    DATA: json.products
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <FlatList
                    data={this.state.DATA}
                    renderItem={ ({item}) => <ListItem item={item} navigation={this.props.navigation} /> }
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }

}

export default HomeScreen