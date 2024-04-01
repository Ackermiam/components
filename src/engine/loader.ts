import { createApp } from 'vue';
import Loader from './loader.vue';

interface MountElementDataset {
  mount?: string;
  configId?: string;
}

interface MountElement extends Element {
  dataset?: MountElementDataset;
}

export const mountApp = () => {
  document.querySelectorAll('[data-page]').forEach((element: MountElement) => {
    const dataSelector: string = element.dataset?.configId ?? '';

    if (element.dataset?.mount === undefined) {
      throw new Error('dataset mount is empty');
    }

    if (!document.querySelector(`#${dataSelector}`)) {
      throw new Error(`script with ${dataSelector} id doesn't exist`);
    }

    const config = JSON.parse(
      document.querySelector(`#${dataSelector}`)?.textContent ?? ''
    );

    const app = createApp(Loader, { config });
    app.mount(element);
    console.log('app mounted successfully');
  });
};