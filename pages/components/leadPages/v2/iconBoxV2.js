import React from "react";


class IconBoxV2 extends React.Component {

    render() {

        const {
            image,
            title,
            description,
            className
        } = this.props;

        return (
            <div className={`w-full md:w-1/3 flex flex-col items-center px-6 ${className}`}>
                <img src={image} className="h-40"></img>
                <h3 className="mt-5 text-3xl text-bold text-center w-full">{title}</h3>
                <p className="text-center mt-2 text-slate-600">
                    {description}
                </p>
            </div>
        )
    }
};

export default IconBoxV2;