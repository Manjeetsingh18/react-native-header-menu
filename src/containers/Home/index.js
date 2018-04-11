import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import { HeaderMenu } from '../../components';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: [["C", "Java", "JavaScript"], ["Python", "Ruby"], ["Swift", "Objective-C"]]
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={{ height: 64, backgroundColor: 'red' }} />
                <HeaderMenu
                    style={{ flex: 1 }}
                    //set the icon of the selected item, default is a check mark
                    bgColor={"red"}                            //the background color of the head, default is grey
                    tintColor={"white"}                        //the text color of the head, default is white
                    selectItemColor={"red"}                    //the text color of the selected item, default is red
                    data={this.state.data}
                    maxHeight={410}                            // the max height of the menu
                    handler={(selection, row) => alert(this.state.data[selection][row])} >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                        <Text> Your own view Here</Text>
                    </View>
                </HeaderMenu>
            </View>
        )
    }
}