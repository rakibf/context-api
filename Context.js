class Context {
  // context is a box that stores a value as like it is a storage
  constructor(value) {
    this.value = value;
  }

  // provider component receiving value prop here and storing it to the context and finally returning the child
  Provider = ({ value, children }) => {
    this.value = value;
    return children;
  };

  // consumer component that uses render props pattern to provide the context value to a component
  Consumer = ({ children }) => children(this.value);
}

const createContext = (value = null) => {
  const context = new Context(value);
  return {
    Provider: context.Provider,
    Consumer: context.Consumer,
  };
};

export default createContext;
