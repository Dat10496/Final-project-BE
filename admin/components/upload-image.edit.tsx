import React from "react";
import {
  Label,
  Box,
  DropZone,
  DropZoneProps,
  DropZoneItem,
} from "@adminjs/design-system";
import { BasePropertyProps } from "adminjs";

const Edit: React.FC<BasePropertyProps> = (props) => {
  const { property, onChange, record } = props

 
  const handleDropZoneChange: DropZoneProps['onChange'] = (files) => {

    onChange && onChange(property.name, files[0])
  }

  const uploadedPhoto = record?.params?.image
  const photoToUpload = record?.params?.image?.name
  return (
    <Box marginBottom="xxl">
      <Label>{property.label}</Label>
      <DropZone onChange={handleDropZoneChange} />
      {uploadedPhoto && !photoToUpload && (
        <DropZoneItem src={uploadedPhoto} />
      )}
    </Box>
  )
}

export default Edit


