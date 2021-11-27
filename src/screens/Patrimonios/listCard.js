import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native'
import styles from '../../styles/style';


class ListCard {
    // constructor(props) {
    //     super(props)
    // }

    render(){
        return (
            <View style={styles.listContainer}>
                <View style={ styles.cardView }>
                    {/* <Image style={ styles.promotionImage } source={ {uri: this.props.data.imageUri} }  /> */}
                    <View style={ styles.descriptionText }>
                        {/* <Text style={ styles.titleText }>{ this.props.data.title }</Text>
                        <Text style={ styles.priceText }>{ this.props.data.price }</Text> */}
                        <Text style={ styles.titleText }>Cadeira</Text>
                        <Text style={ styles.titleText }>Arroz de Batata</Text>
                        <Text style={ styles.titleText }>Nhoque</Text>
                        <Text style={ styles.titleText }>Metanfetamina</Text>
                        <Text style={ styles.titleText }>Hidrante</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default ListCard