import React from "react";
import { BasePropertyProps } from "adminjs";
import { Box } from "@adminjs/design-system";

const List: React.FC<BasePropertyProps> = (props) => {
  const { record } = props;

  const srcImg = record?.params["image"];
  return <Box>{srcImg ? <img src={srcImg} width="100px" /> : "no image"}</Box>;
};

export default List;
