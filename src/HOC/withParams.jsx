import React from 'react';

export const withPropsTaskInput = (Component, props) => {
    debugger;
    class ComponentWithProps extends React.Component {
        render() {
            return <ComponentWithProps id={props.id} onChange={props.onChange} value={props.value}/>;
        }
    }
    return ComponentWithProps;
};