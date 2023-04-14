import React from "react";

type MessagePropsType = {
    text: string
    id: string
}

export const Message = (props: MessagePropsType) => {
    return <div>
        {props.text}
    </div>
}

