/* 
Context API = প্রসঙ্গ API

অন্য প্যারেন্ট কম্পোনেন্ট এর কোনো প্রসঙ্গ চাইল্ড এ আনতে গেলে Context API ব্যবহার করতে হয়।

Steps to Create and Use Context API:

# STEP 1:

Create a Context

const CounterContext = React.createContext(); // context is like a box
export default CounterContext;

CounterContext gives us two components -
1. <CounterContext.Provider>  2. <CounterContext.Consumer>

# STEP 2:

Wrap parent with <CounterContext.Provider> as it is going to provide context to any child. Also give context values.

import CounterContext from './';
<CounterContext.Provider value={{count: 0, incrementCount: incrementCount}}>
<App />
</CounterContext.Provider>

# STEP 3:

Wrap child which wants to use the context with CounterContext.Consumer.
Follow the render props pattern.

<CounterContext.Consumer>
({count, incrementCount}) => <ClickCounter count={count} incrementCount={incrementCount} />
</CounterContext.Consumer>

*/