import { Select } from 'antd';
import data from 'Mocks/tree.json';
import React from 'react';
import './style.scss';

const { Option } = Select;

interface Props {
  changeValue: Function;
}
const DeliverySelect: React.FC<Props> = ({ changeValue }) => {
  const arrData = Object.entries(data);

  let result = arrData.map((item: any, index) => (
    <Option key={index} value={item[1].name_with_type}>
      {item[1].name_with_type}
    </Option>
  ));
  const onChange = (value: string) => {
    changeValue(value);
  };
  return (
    <Select
      className='DeliverySelect'
      showSearch
      placeholder='Select a person'
      optionFilterProp='children'
      onChange={onChange}
    >
      {result}
    </Select>
  );
};

export default DeliverySelect;
