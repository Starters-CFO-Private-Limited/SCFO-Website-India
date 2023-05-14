import React from "react";

export default class Input extends React.Component {

    render() {
        const {
            name,
            className,
            type,
            placeholder,
            value,
            submitted,
            error,
            minLength = 0,
            maxLength = 99999,
            disabled = false,
            onChange = () => { }
        } = this.props;

        return (
            <React.Fragment>
                <input type={type} placeholder={placeholder} required name={name} value={value} onChange={onChange} disabled={disabled} minLength={minLength} maxLength={maxLength} className={"w-full h-14 border border-slate-300 px-4" + " " + className}></input>
                {submitted && error && <small className="text-red-500">{error}</small>}
            </React.Fragment>
        )
    }
}