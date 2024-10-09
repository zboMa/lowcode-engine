import {
  IPublicTypeComponentMap,
  IPublicTypeProCodeComponent,
} from '../shell/type/npm';

/**
 * @deprecated use same function from '@felce/lowcode-utils' instead
 */
export function isProCodeComponentType(
  desc: IPublicTypeComponentMap,
): desc is IPublicTypeProCodeComponent {
  return 'package' in desc;
}
