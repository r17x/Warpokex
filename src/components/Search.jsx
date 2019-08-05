import React from 'react'
import { func, string } from 'prop-types'
import { Input, Icon } from 'atomize'
export default function Search({
  isLoading,
  placeholder,
  onChange,
  onClickIcon,
  onKeyPress,
}) {
  return (
    <Input
      isLoading={isLoading}
      disabled={isLoading}
      rounded="circle"
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
      suffix={
        !isLoading && (
          <Icon
            name="Search"
            isLoading={isLoading}
            size="20px"
            cursor="pointer"
            onClick={onClickIcon}
            pos="absolute"
            top="50%"
            right="1rem"
            transform="translateY(-50%)"
          />
        )
      }
    />
  )
}

Search.defaultProps = {
  placeholder: 'Search',
}
Search.propTypes = {
  placeholder: string,
  onChange: func.isRequired,
  onClickIcon: func,
}
