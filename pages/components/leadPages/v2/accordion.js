import React from "react";


class Accordion extends React.Component {

    state = {}

    componentDidMount() {
        this.closeAll();
    }

    closeAll = () => {
        const {
            elements
        } = this.props;

        elements.forEach((index, _) => {
            const state = this.state || {};
            state[index] = false;
            this.setState(state);
        });
    }

    toggleOne = (index) => {
        const state = this.state;
        state[index] = !state[index];
        this.setState(state);
        this.forceUpdate();
    }

    handleToggle = (index) => {
        this.closeAll();

        this.toggleOne(index);

        this.forceUpdate();
    }

    render() {
        const {
            elements = [],
        } = this.props;

        return (
            <div className="mt-10">
                {
                    elements.map((element, index) => {
                        return (
                            <div key={index} className={"border border-slate-300 rounded p-4 text-slate-700 my-1 cursor-pointer"} onClick={() => { this.handleToggle(index) }}>
                                <div className="font-medium">
                                    {element.title}
                                </div>
                                <div className={`${this.state[index] ? '' : 'hidden'} mt-5 text-slate-500`} onClick={this.closeAll}>
                                    {element.body()}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default Accordion;