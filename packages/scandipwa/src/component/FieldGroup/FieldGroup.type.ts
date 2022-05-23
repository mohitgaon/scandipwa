/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/scandipwa
 */

import { DOMAttributes, FormHTMLAttributes, MutableRefObject } from 'react';

import { Children, Mods } from 'Type/Common.type';
import { ValidationDOMOutput, ValidationRule } from 'Util/Validator/Validator.type';

export interface FieldGroupContainerProps {
    children: Children;
    attr: FormHTMLAttributes<HTMLDivElement>;
    events: Omit<DOMAttributes<HTMLDivElement>, 'children' | 'dangerouslySetInnerHTML'>;
    elemRef: MutableRefObject<HTMLDivElement>;
    validationRule: ValidationRule;
    validateOn: string[];
    showErrorAsLabel: boolean;
    label: string;
    subLabel: string;
    mods: Mods;
}

export interface FieldGroupContainerState {
    validationResponse: true | ValidationDOMOutput | null;
}

export interface FieldGroupComponentProps {
    children: Children;
    attr: FormHTMLAttributes<HTMLDivElement>;
    events: Omit<DOMAttributes<HTMLDivElement>, 'children' | 'dangerouslySetInnerHTML'>;
    setRef: (elem: HTMLDivElement | null) => void;
    showErrorAsLabel: boolean;
    validationResponse: true | ValidationDOMOutput | null;
    label: string;
    subLabel: string;
    mods: Mods;
}

export type FieldGroupContainerPropsKeys = 'validationResponse'
| 'children'
| 'attr'
| 'showErrorAsLabel'
| 'label'
| 'subLabel'
| 'mods'
| 'events'
| 'setRef';