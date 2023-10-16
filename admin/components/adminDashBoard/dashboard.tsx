import React, { useEffect, useState } from "react";
import { ApiClient } from "adminjs";

const api = new ApiClient();

function dashboard() {
  const [data, setData] = useState();

  useEffect(() => {
    api
      .getDashboard()
      .then((response) => {
        console.log(response);
        setData(response.data); // { message: 'Hello World' }
      })
      .catch((error) => {
        // handle any errors
      });
  }, []);
  console.log(data);
  return <div>dashboard</div>;
}

export default dashboard;
