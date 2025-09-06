import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { CheckGroup } from "../CheckGroup";
import { CheckLabel } from "../CheckLabel";
import { GridView } from "./gridView";

const langs = [
  { value: "china", label: "中国" },
  {
    value: "usa",
    label: "美国",
  },
  {
    value: "uk",
    label: "英国",
  },
  {
    value: "japan",
    label: "日本",
  },
  {
    value: "korea",
    label: "韩国",
  },
  {
    value: "france",
    label: "法国",
  },
  {
    value: "germany",
    label: "德国",
  },
  {
    value: "italy",
    label: "意大利",
  },
  {
    value: "spain",
    label: "西班牙",
  },
  {
    value: "portugal",
    label: "葡萄牙",
  },
  {
    value: "netherlands",
    label: "荷兰",
  },
];

export default function BlankScreen() {
  const [list, setList] = useState<Array<{ value: string; label: string }>>([]);
  return (
    <SafeAreaView>
      <CheckGroup initValue={{ setVal: setList, val: list }}>
        <View style={{ backgroundColor: "red" }}>
          <GridView numOfRow={1}>
            {langs.map((item) => (
              <CheckLabel
                key={item.value}
                item={item}
                checkedStyle={{ backgroundColor: "blue" }}
              />
            ))}
          </GridView>
        </View>
      </CheckGroup>
    </SafeAreaView>
  );
}
