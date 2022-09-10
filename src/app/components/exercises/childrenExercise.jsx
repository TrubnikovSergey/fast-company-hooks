import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

const ListComponent = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        const item = {
            ...child.props,
            index: index
        };

        return React.cloneElement(child, item);
    });
};

ListComponent.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
};

const Component = ({ index }) => {
    return <div>Компонент списка {index + 1}</div>;
};
Component.propTypes = {
    index: PropTypes.number
};

export default ChildrenExercise;
