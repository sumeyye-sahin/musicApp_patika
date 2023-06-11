import React from 'react';
import {View, Text,Image} from 'react-native';
import styles from './MusicCard.Style';

const MusicCard = (props) =>{
    return(
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:props.music.imageUrl}}  > 
        
        </Image>
            
        
        <View style={styles.inner_container}>
            <Text style={styles.title}>{props.music.title}</Text>
           <View style={styles.context_container}>

             <View style={styles.info_container}>
                <Text style={styles.artist}>{props.music.artist}</Text>
                <Text style={styles.year}>{props.music.year}</Text>
              </View>
              
                {
                    props.music.isSoldOut && (<View style={styles.soldout_container}><Text style={styles.soldout_text_container}>TÜKENDİ</Text></View>)
                }

                
              

           </View>



        </View>
    </View>

);
};

export default MusicCard;