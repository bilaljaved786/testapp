/*

[React Theory]

three phases in react

 1) componentDidMount
 2) componentDidUpdate
 3) componentWillunmount 

 only three component phases in react but several life cycle method for each phase

 constructor is a life cycle method in react

 its not best practice to call api in ctor in react [class component talking about]

 this.setState(counter:counter + 1)  [we have setState() function in class components to set state or change]

 ComponentDidMount => 
   1) means component created
   2) no effects of props and states
   3) we use this when we call some api
   4) when we want to first load component fully then use this 
   5) when we want to first load html complete dom then calll some functionality use this 


ComponentDidMount vs ComponentDidUpdate
   
    ComponentDidMount  => run when fully component loaded
    ComponentDidUpdate => run when props and states update

    
 */



