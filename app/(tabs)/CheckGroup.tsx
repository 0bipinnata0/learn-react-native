import { useCheckGroupValue } from "./blank/hooks/useCheckGroupValue";
import { createStaticContext } from "./blank/utils/createStaticContext";

const [useCheckContext, CheckGroup] = createStaticContext(
  useCheckGroupValue<string>
);

export { CheckGroup, useCheckContext };

