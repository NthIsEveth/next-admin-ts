import { PREFIX_MAP } from '@/utils/consts';
import {
  Form,
  InputProps,
  SelectProps,
  Grid,
  UploadProps,
  RulesProps,
} from '@arco-design/web-react';
import React, { createElement, forwardRef } from 'react';

export type JsonElements = Array<{
  label: string;
  inputName: string;
  element?: React.ComponentType<SelectProps | InputProps | UploadProps>;
  props?: InputProps | SelectProps | UploadProps;
  span?: number;
  defaultValue?: unknown;
  children?: React.ComponentType;
  required?: boolean;
  rules: RulesProps<any>[];
}>;
export type BaseOnChange = (value: string, key: string) => void;
type ListSearchProps = {
  searchInputs: JsonElements;
  baseOnChange: BaseOnChange;
  form: Record<string, string>;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OnChange = (value: string, e: any, input) => void;
function FormPanel({ searchInputs, baseOnChange, form }: ListSearchProps) {
  const onChange: OnChange = (value, e, input: JsonElements[number]) => {
    baseOnChange(value, input.inputName);
    if (input.props && input.props.onChange) input.props.onChange(value, e);
  };
  const inputs = searchInputs.map((input) => (
    <Grid.Col key={input.inputName} span={input.span}>
      <Form.Item
        label={input.label}
        key={input.inputName}
        rules={[
          {
            required: !!input.required,
            message: `${PREFIX_MAP.get(input.element)}${input.label}`,
          },
          ...(input.rules || []),
        ]}
        field={input.inputName}
      >
        {createElement(
          input.element,
          {
            ...input.props,
            onChange: (val: string, e: any) => onChange(val, e, input),
            value: form[input.inputName],
          },
          input.children
        )}
      </Form.Item>
    </Grid.Col>
  ));
  return (
    <Form autoComplete="false" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
      <Grid.Row>{inputs}</Grid.Row>
    </Form>
  );
}
export default forwardRef(FormPanel);
