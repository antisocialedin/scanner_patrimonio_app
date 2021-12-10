import React, { useState, useEffect} from 'react';
import {FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/style';
import { FontAwesome } from "@expo/vector-icons";

export default class BasicFlatList {
    state = {
      otherStateStuff: ...,
      selected: (new Map(): Map<string, boolean>) //iterable object with string:boolean key:value pairs
    }
  
    onPressAction = (key: string) => {
      this.setState((state) => {
        //create new Map object, maintaining state immutability
        const selected = new Map(state.selected);
        //remove key if selected, add key if not selected
        this.state.selected.has(key) ? selected.delete(key, !selected.get(key)) : selected.set(key, !selected.get(key));
        return {selected};
      });
    }
  
    renderRow = (item) => {
      return (
          <RowItem
            {...otherProps}
            item={item}
            onPressItem={this.onPressAction}
            selected={!!this.state.selected.get(item.key)} />
      );
    }
  
    render() {
      return(
        <FlatList style={styles.container}
          data={this.state.data}
          renderItem={({ item }) => (
            this.renderRow(item)
          )}
          extraData={this.state}
        />
      );
    }
  }
  
  
  class RowItem extends Component {
    render(){
      //render styles and components conditionally using this.props.selected ? _ : _
      
      return (
        <TouchableOpacity onPress={this.props.onPressItem}>
          ...
        </TouchableOpacity>
      )
    }
  }