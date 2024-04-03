import components from './paths';

export const findComponent = (component: string) => {
  for (const [key, value] of Object.entries(components)) {
    if (key === component) {
      return value;
    }
  }
};