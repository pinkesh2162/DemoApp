import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  FC,
  useRef,
} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './styles';
import {
  backArrow,
  black,
  darkTextColor,
  ic_close,
  plusIcon,
  SourceSansPro,
  SourceSansProSemiBold,
} from '../../constants';
import { localizedStrings } from '../../localization';
import CustomText from '../customText';
import {
  AddItemAndTransferProps,
  AddItemAndTransferRef,
  SectionData,
} from '../../types';

const AddItemAndTransfer: FC<AddItemAndTransferProps> = forwardRef<
  AddItemAndTransferRef,
  AddItemAndTransferProps
>((props, ref) => {
  const { isTransferDisable, onPress, title } = props;
  const translateY = useRef(new Animated.Value(300)).current;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const sectionListFinishData: SectionData[] = [
    {
      title: localizedStrings.add_item_to_an_inventory,
      image: plusIcon,
    },
    {
      title: localizedStrings.transfer_items_between_inventories,
      image: backArrow,
    },
  ];

  useImperativeHandle(ref, () => ({
    modalOpen,
    modalClose,
  }));

  const modalOpen = () => {
    setIsModalVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const modalClose = () => {
    Animated.timing(translateY, {
      toValue: 300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsModalVisible(false);
    });
  };

  const handleCellPress = (index: number) => {
    modalClose();
    onPress(index);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: SectionData;
    index: number;
  }) => {
    if (index === 1 && isTransferDisable) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => handleCellPress(index)}
        style={styles.cellView}
        activeOpacity={0.8}
      >
        <Image source={item.image} style={styles.imageStyle} />
        <CustomText
          title={item.title ? item.title : ''}
          fontSize={18}
          fontFamily={SourceSansPro}
          textStyle={styles.cellTitle}
          color={black}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      style={styles.view}
      visible={isModalVisible}
      transparent={true}
      animationType="none"
    >
      <TouchableWithoutFeedback onPress={modalClose}>
        <View style={styles.mainView}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[styles.container, { transform: [{ translateY }] }]}
            >
              <View style={styles.topHeaderView}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.ImageView}
                  onPress={modalClose}
                >
                  <Image source={ic_close} style={styles.arrowImage} />
                </TouchableOpacity>
                {title ? (
                  <View style={styles.titleView}>
                    <CustomText
                      title={title}
                      fontSize={18}
                      fontFamily={SourceSansProSemiBold}
                      color={darkTextColor}
                      textStyle={styles.titleStyle}
                    />
                  </View>
                ) : null}
                <View />
              </View>
              <View style={styles.borderStyle} />
              <View style={styles.flatListContainer}>
                <FlatList
                  data={sectionListFinishData}
                  keyExtractor={(item, index) => `${item.title}-${index}`}
                  scrollEnabled={false}
                  renderItem={renderItem}
                  ItemSeparatorComponent={() => (
                    <View style={styles.borderStyle} />
                  )}
                />
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
});

export default AddItemAndTransfer;
