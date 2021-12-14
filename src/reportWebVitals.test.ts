import reportWebVitals from './reportWebVitals';

jest.mock('web-vitals');

it('runs without erroring given no function', () => {
  reportWebVitals();
});

it('runs without erroring given a function', () => {
  reportWebVitals(() => true);
});
