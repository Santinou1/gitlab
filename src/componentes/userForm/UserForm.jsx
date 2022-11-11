import { Fragment } from "react";
import { useInputValue } from "../../Hooks/useInputValue";
import "./UserForm.scss";

export const UserForm = ({ onSubmit}) => {
  const username = useInputValue("");
  const password = useInputValue("");

return (
    <Fragment>
        <form onSubmit={onSubmit}>
            <input placeholder="username" {...username} />
            <input placeholder="Password" type="password" {...password} />
            <button> on </button>
        </form>
    </Fragment>
    );
};
