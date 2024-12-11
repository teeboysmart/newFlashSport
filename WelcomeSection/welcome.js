import React, { useState, useRef } from 'react'
import { View, StyleSheet, FlatList, Text, Dimensions} from 'react-native'
import Slides from './slide';
import Indicator from './Indicator';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Welcome = ({Slide = [], onDone}) => {
  if (!Slide || !Slide.length) return null;

  const onViewableItemsChanged = useRef((item) => {
     const index = item.viewableItems[0].index;
     setCurrentslideIndex(index);
  })

  const FlatListRef = useRef()

  const handleSkip = () => {
     FlatListRef.current.scrollToEnd({animated: true});
  };

  const handleNext = () => {
    if (currentslideIndex >= Slide.length -1) return;
    FlatListRef.current.scrollToIndex({index: currentslideIndex + 1})
  }

  const [currentslideIndex, setCurrentslideIndex] = useState(0);
       

    return (
        <>
        <FlatList
        ref={FlatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled 
        data={Slide} 
        keyExtractor={(item) => item.key.toString()}
        renderItem={({item}) => <Slides item={item}/>}
        onViewableItemsChanged={onViewableItemsChanged.current}
        />

        <View style={styles.indicatorContainer}>
            {/* {Slide.map((item) => <View key={item.key.toString()} style={styles.indicator}/>)} */}
            <Indicator IndicatorCount={Slide.length} currentslideIndex={currentslideIndex}/>
        </View>
        {currentslideIndex < Slide.length -1 &&  <Text onPress={handleSkip} style={[styles.button, styles.leftButton]}>Skip</Text>
         }
        
          {currentslideIndex < Slide.length -1 ? 
          <Text onPress={handleNext} style={[styles.button, styles.rightButton]}>Next</Text> : 
          <Text onPress={onDone} style={[styles.button, styles.rightButton]}>Done</Text>}

         
                 
        </>
    )
}


const { width } = Dimensions.get('screen')

export default Welcome;

const styles = StyleSheet.create({
   indicatorContainer: {
    position: "absolute",
    width,
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
   },
   button: {
    fontSize: hp(3),
    color: 'white',
    letterSpacing: 2
   },
   indicator: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 5 
   },
   leftButton: {
     position: 'absolute',
     left: 10,
     bottom: 20
   },
   rightButton: {
    position: 'absolute',
    right: 10,
    bottom: 20
   }    
})

