import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('Input 컴포너트가 렌더링 되는 지 확인', () => {
    const { getByPlaceholderText, container } = render(<Input />);

    expect(container).toHaveTextContent('할 일');
    expect(container).toHaveTextContent('추가');

    const input = getByPlaceholderText('할 일을 입력해 주세요');

    expect(input.value).toBe('');
  });
});

describe('Input', () => {
  it('Input 폼에 입력값이 주어진다면', () => {
    const textContent = '코드숨 과제하기';
    const { getByPlaceholderText, container } = render(<Input />);

    expect(container).toHaveTextContent('할 일');
    expect(container).toHaveTextContent('추가');

    const input = getByPlaceholderText('할 일을 입력해 주세요');

    fireEvent.change(input, { target: { value: textContent } });

    expect(input.value).toBe(textContent);
  });
});
