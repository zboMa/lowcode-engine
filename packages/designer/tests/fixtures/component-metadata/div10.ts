import { IPublicTypeComponentMetadata } from '@felce/lowcode-types';
export default {
  componentName: 'Div',
  title: '容器',
  docUrl: 'https://github.com/fe-lce/lowcode-materials/tree/main/docs',
  devMode: 'proCode',
  tags: ['布局'],
  configure: {
    component: {
      nestingRule: {
        parentWhitelist: (parent, my) => {
          if (parent.componentName === 'Form' && my.componentName === 'Div') return true;
          return false;
        },
        childWhitelist: (child, my) => {
          if (child.componentName === 'Image' && my.componentName === 'Div') return true;
          return false;
        },
      },
    },
  },
} as IPublicTypeComponentMetadata;
