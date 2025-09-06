import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import { useCheckContext } from "./CheckGroup";

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonChecked: {
    backgroundColor: '#448AFF',
  },
  label: {
    color: '#666666',
    fontSize: 14,
    height: 34,
    lineHeight: 34,
    textAlign: 'center',
  },
  labelChecked: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
})

export const CheckLabel: React.FC<{
  style?: ViewStyle;
  checkedStyle?: ViewStyle,
  labelStyle?: TextStyle;
  item: {
    label: string;
    value: string;
  };
}> = ({ style, labelStyle, checkedStyle, item }) => {
  const { setCheckedItems, checkedItems } = useCheckContext();
  const checked = checkedItems.includes(item);
  return (
    <Pressable
      style={[styles.button, style, checked ? [styles.buttonChecked, checkedStyle] : null]}
      onPress={() => {
        if (checked) {
          setCheckedItems((list) => list.filter((aItem) => aItem !== item));
        } else {
          setCheckedItems((list) => [...list, item]);
        }
      }}
    >
      <Text style={StyleSheet.flatten([styles.label, labelStyle, checked ? styles.labelChecked : null])}>
        {item.label}
      </Text>
    </Pressable>
  );
};
