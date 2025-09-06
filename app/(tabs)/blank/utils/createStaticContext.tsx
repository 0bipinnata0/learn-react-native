import React, { useContext } from "react";


export const createStaticContext = <InitV, IState>(
  useHook: (initValue: InitV) => IState
) => {
  const staticContext = React.createContext<IState | null>(null);

  const Provider: React.FC<React.PropsWithChildren<{ initValue: InitV }>> = ({
    initValue,
    children,
  }) => {
    return (
      <staticContext.Provider value={useHook(initValue)}>
        {children}
      </staticContext.Provider>
    );
  };

  const useStaticContext = () => {
    const context = useContext(staticContext);
    if (context === null) {
      throw new Error("useStaticContext error");
    }

    return context;
  };

  return [useStaticContext, Provider] as const;
};
