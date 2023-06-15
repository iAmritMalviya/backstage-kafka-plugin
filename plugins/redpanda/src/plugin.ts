import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const redpandaPlugin = createPlugin({
  id: 'redpanda',
  routes: {
    root: rootRouteRef,
  },
});

export const RedpandaPage = redpandaPlugin.provide(
  createRoutableExtension({
    name: 'RedpandaPage',
    component: () =>
      import('./components/KafkaDashboard').then(m => m.KafkaDashboard),
    mountPoint: rootRouteRef,
  }),
);
