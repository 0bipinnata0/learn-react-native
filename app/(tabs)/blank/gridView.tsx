import React, { useCallback, useState } from "react";
import {
    LayoutChangeEvent,
    LayoutRectangle,
    StyleSheet,
    View,
} from "react-native";

interface GridViewProps {
  numOfRow?: number;
  spacing?: number;
  verticalSpacing?: number;
}

const useLayout = () => {
  const [layout, setLayout] = useState<LayoutRectangle>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const onLayout = useCallback((evt: LayoutChangeEvent) => {
    setLayout(evt.nativeEvent.layout);
  }, []);
  return {
    ...layout,
    onLayout,
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
});
export const GridView: React.FC<React.PropsWithChildren<GridViewProps>> = ({
  numOfRow = 3,
  spacing = 16,
  verticalSpacing = 8,
  children,
}) => {
  const { width, onLayout } = useLayout();

  const itemWidth = (width - (numOfRow - 1) * spacing - 0.5) / numOfRow;

  console.log(itemWidth);

  return (
    <View onLayout={onLayout} style={[styles.container]}>
      {React.Children.toArray(children)
        .filter(React.isValidElement)
        .map((child: any, idx) => {
          const style = child.props.style;
          return React.cloneElement(child, {
            style: [
              style,
              {
                width: itemWidth,
                marginLeft: idx % numOfRow === 0 ? 0 : spacing,
                marginTop: Math.floor(idx / numOfRow) > 0 ? verticalSpacing : 0,
              },
            ],
          });
        })}
    </View>
  );
};
