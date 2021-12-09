import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Image, Linking } from 'react-native'
import styles from '../../styles/style';


class ListCard {
    /* constructor(props) {
        super(props);
    }
 */
    render(){
        return(
            <View style={ styles.centeredView }>
              <View style={ styles.cardView }>
                <Image style={ styles.promotionImage } source={ {uri: this.props.data.imageUri} }  />
                <View style={ styles.descriptionText }>
                  <Text style={ styles.titleText }>{ this.props.data.title }</Text>
                  <Text style={ styles.priceText }>{ this.props.data.price }</Text>
                  <TouchableHighlight
                      style={ styles.linkButton }
                      onPress={ async () => {
                        const supported = await Linking.canOpenURL(this.props.data.linkUrl);
                        if (supported) {
                          await Linking.openURL(this.props.data.linkUrl);
                        }
                      }}
                    >
                    <Text style={ Styles.textLinkButton }>Ir para loja</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          )
        }
      }
      
      export default ListCard
      