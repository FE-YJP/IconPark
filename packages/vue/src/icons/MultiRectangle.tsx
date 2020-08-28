/**
 * @file MultiRectangle 多方形
 * @author Auto Generated by IconPark
 */

/* tslint:disable: max-line-length */
/* eslint-disable max-len */
import {ISvgIconProps, IconHelper, IconWrapper} from '../runtime';

export default IconWrapper(
    'multi-rectangle',
    true,
    (h: IconHelper, props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
            fill="none"
        >
            <path
                d="M12 39H44V7H12V15"
                stroke={props.colors[0]}
                stroke-width={props.strokeWidth}
                stroke-linejoin={props.strokeLinejoin}
            />
            <path
                d="M8 39H32V15H8V23"
                stroke={props.colors[0]}
                stroke-width={props.strokeWidth}
                stroke-linejoin={props.strokeLinejoin}
            />
            <rect
                x="4"
                y="23"
                width="16"
                height="16"
                fill="#09C8E2"
            />
            <rect
                x="4"
                y="23"
                width="16"
                height="16"
                fill={props.colors[1]}
            />
            <rect
                x="4"
                y="23"
                width="16"
                height="16"
                stroke={props.colors[0]}
                stroke-width={props.strokeWidth}
                stroke-linejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
