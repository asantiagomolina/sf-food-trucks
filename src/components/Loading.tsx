import React from "react";
import { faHotdog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading: React.FC = () => {

    return (
        <div className="h-dvh flex flex-1 items-center justify-center text-ffred bg-ffaltyellow">
            <FontAwesomeIcon icon={faHotdog} size="10x" beatFade />
        </div>
    )
}

export default Loading
