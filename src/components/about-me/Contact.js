
import React from "react";
import { useHistory} from "react-router-dom";

const Contact = () => {
    const history = useHistory()
    return (
        <div>
            <p>Контакты</p>
            <button className="button button_type_back"
                    onClick={() => history.goBack()}>Back
            </button>
        </div>
        )

}
export default Contact

