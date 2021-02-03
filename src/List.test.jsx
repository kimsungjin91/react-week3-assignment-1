import React from 'react';
import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  function renderList({ component }) {
    return render(component);
  }
  context('test의 length가 0인 경우', () => {
    const tasks = [];
    const handleClick = jest.fn();

    it('"할 일이 없어요!"를 표시한다.', () => {
      const { container } = renderList(
        <List
          tasks={tasks}
          onClickDelete={handleClick}
        />,
      );

      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });

  context('test의 length가 1이상인 경우', () => {
    const tasks = [
      {
        id: 1,
        title: '뭐라도 하기',
      },
    ];

    it('입력된 할 일을 표시한다.', () => {
      const { container } = renderList(
        <List
          tasks={tasks}
        />,
      );

      expect(container).toHaveTextContent('뭐라도 하기');
    });
  });
});
