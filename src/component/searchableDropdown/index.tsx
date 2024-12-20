import React, { Component, createRef } from 'react';
import {
  Text,
  FlatList,
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
  FlatListProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { styles } from './styles';

interface Item {
  id: number;
  productName: string;
}

interface Props {
  items: Item[];
  defaultIndex?: number;
  multi?: boolean;
  selectedItems?: Item[];
  onItemSelect: (item: Item) => void;
  onRemoveItem?: (item: Item, index: number) => void;
  onTextChange?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onEndReached?: () => void;
  resetValue?: boolean;
  chip?: boolean;
  textInputProps?: TextInputProps;
  listProps?: FlatListProps<Item>;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  itemsContainerStyle?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  placeholderTextColor?: string;
  underlineColorAndroid?: string;
  calculationItem?: (item: Item) => React.ReactNode;
  setSort?: (item: Item, searchedText: string) => boolean;
}

interface State {
  item: Item;
  listItems: Item[];
  focus: boolean;
}

const defaultItemValue: Item = {
  id: 0,
  productName: '',
};

/***
 * SearchableDropdown Component for TextInput and listing
 */
class SearchableDropdown extends Component<Props, State> {
  private input = createRef<TextInput>();
  private listRef = createRef<FlatList<Item>>();

  constructor(props: Props) {
    super(props);

    this.state = {
      item: defaultItemValue,
      listItems: [],
      focus: false,
    };
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.items !== prevState.listItems) {
      return {
        listItems: nextProps.items,
      };
    }
    return null;
  }

  componentDidMount() {
    const { items, defaultIndex } = this.props;
    if (defaultIndex !== undefined && items.length > defaultIndex) {
      this.setState({
        listItems: items,
        item: items[defaultIndex],
      });
    } else {
      this.setState({ listItems: items });
    }
  }

  searchedItems = (searchedText: string) => {
    const { setSort, items, onTextChange } = this.props;
    const sortFunction =
      setSort ||
      ((item: Item, text: string) =>
        item.productName.toLowerCase().includes(text.toLowerCase()));
    const filteredItems = items.filter((item) =>
      sortFunction(item, searchedText)
    );

    this.setState({
      listItems: filteredItems,
      item: { id: -1, productName: searchedText },
    });

    if (onTextChange) {
      onTextChange(searchedText);
    }
  };

  renderItems = (item: Item, index: number) => {
    const {
      multi,
      selectedItems,
      onItemSelect,
      onRemoveItem,
      itemStyle,
      itemTextStyle,
      calculationItem,
    } = this.props;
    const isSelected = selectedItems?.some(
      (selected) => selected.id === item.id
    );

    if (multi && isSelected) {
      return (
        <TouchableOpacity style={[styles.itemStyle, itemStyle]}>
          <View style={styles.textViewItem}>
            <Text>{item.productName}</Text>
          </View>
          <View style={styles.removeItemView}>
            {onRemoveItem && (
              <TouchableOpacity
                onPress={() => onRemoveItem(item, index)}
                style={styles.closeContainer}
              >
                <Text>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        style={[itemStyle, styles.itemStyle]}
        onPress={() => {
          this.setState({ item });
          onItemSelect(item);
        }}
      >
        <View style={styles.productNameView}>
          <Text style={[styles.itemTextStyle, itemTextStyle]}>
            {item.productName}
          </Text>
        </View>
        {calculationItem && calculationItem(item)}
      </TouchableOpacity>
    );
  };

  renderFlatList = () => {
    const { listProps, itemsContainerStyle, onEndReached } = this.props;
    const { focus, listItems } = this.state;

    if (focus) {
      return (
        <FlatList
          {...listProps}
          ref={this.listRef}
          style={[styles.itemsContainerStyle, itemsContainerStyle]}
          data={listItems}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => this.renderItems(item, index)}
          onEndReached={onEndReached}
          keyboardShouldPersistTaps="handled"
        />
      );
    }
    return null;
  };

  renderTextInput = () => {
    const {
      textInputProps,
      underlineColorAndroid,
      placeholder,
      placeholderTextColor,
      textInputStyle,
      onFocus,
      onBlur,
    } = this.props;
    const { item } = this.state;
    return (
      <View style={[styles.textInputView, textInputStyle]}>
        <TextInput
          {...textInputProps}
          ref={this.input}
          multiline={false}
          style={[styles.textInputStyle]}
          value={item.productName}
          onChangeText={this.searchedItems}
          onFocus={() => {
            onFocus?.();
            this.setState({ focus: true });
          }}
          onBlur={() => {
            onBlur?.();
            this.setState({ focus: false });
          }}
          underlineColorAndroid={underlineColorAndroid}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
        />
      </View>
    );
  };

  render() {
    const { containerStyle, selectedItems, chip, multi } = this.props;

    return (
      <View style={[styles.container, containerStyle]}>
        {chip && multi && selectedItems && selectedItems.length > 0 && (
          <View style={styles.mapView}>
            {selectedItems.map((item, index) => (
              <View key={index} style={styles.textView}>
                <Text>{item.productName}</Text>
                <TouchableOpacity
                  onPress={() => this.props.onRemoveItem?.(item, index)}
                  style={styles.closeIcon}
                >
                  <Text>X</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
        {this.renderTextInput()}
        {this.renderFlatList()}
      </View>
    );
  }
}

export default SearchableDropdown;
