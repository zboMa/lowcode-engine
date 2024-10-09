import { Component } from '../simulator';
import { IPublicTypeComponentInstance, IPublicTypeSimulatorRenderer } from '@felce/lowcode-types';

export type BuiltinSimulatorRenderer = IPublicTypeSimulatorRenderer<
  Component,
  IPublicTypeComponentInstance
>;

export function isSimulatorRenderer(obj: any): obj is BuiltinSimulatorRenderer {
  return obj && obj.isSimulatorRenderer;
}
