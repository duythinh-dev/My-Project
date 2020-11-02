import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.PropTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function index(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  return (<div>
    <form>
        <input type="text" value={value} onChange=></input>
    </form>
  </div>;
  )
}

export default index;
