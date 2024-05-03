import "./Reserve.css"
import React from "react"
import { InlineWidget } from "react-calendly";


const Reserve = () => {
        return (
            <div className="Reserve">
                <InlineWidget url="https://calendly.com/ruif21vsc" />
            </div>
        );
}

export default Reserve;