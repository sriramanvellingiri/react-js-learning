dComponents
Function Based Components 
Class Based Components
JSX - java Script XML 
StateManagment - setState property
props as Arguments and Array Destructuring
Template Literals 
Event Naming 
    - Creating Parent and Child Component 
    - Binding the event in the Parent Component 
    - Calling  Event in the child component using the Props 
Conditional Rendering
Iterating the list using Map function
Index as key is an antipattern
Forms
Lifecycle
    - Mounting  - instance is created and rerender into the DOM.
        - Constructor
        - getderivedStateFromprops
        - render
        - componentdidMount - (Service Call)
    - Updating -    Component is rerendered and when there is a changes in the props or event
        - getderivedStateFromProps(props, state)
        - shouldComponentUpdate
        - render
        - getSnapshotBeforeUpdate(prevProps, prevState) - 
        - componentDidUpdate(pre)
    - UnMounting  - Removing the DOM and removing the API call.
    - Error Handling 
        - getDerivedStateFromError
        - ComponentdidCatch
Fragments
PureComponent
    shallowComparision 
        1.primitive Types => Checks the datatype and value if a === b where a is 2 and b is 2 - Datastructure - Stack
        2.complex or referential datatypes => Checks is the reference of the datatype  if a === b where a is [1,2,3] c = [1,2,3] and var b = a and a === b and it is similar to Delta operations
        Datastructure - Stack(pointer) and Hashmap
    if there is any changes in the component it will not be re rendered
ReactRef
    - Focusing the input element in the text Field
Portal 
    - Insert Different location of the elements inside the DOM
Higher Order Component - HOC pattern
    - A pattern where function takes a component as an argument and returns a new component.
Render Props Pattern
    - Sharing the code between the React Components using a prop whose value is a function.
Context
    - To pass the data from higher component to lower component 
    - CreateContext 
    - Provide the context
    - Consume the context 






