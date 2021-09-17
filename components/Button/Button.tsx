import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from '../../assets/svg/arrow.svg'

export const Button = ({ apperance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: apperance === 'primary',
                [styles.ghost]: apperance === 'ghost'
            })}
            {...props}
        >
            {children}
            {
                arrow !== 'none' &&
                <span className={cn(styles.arrow, {
                    [styles.down]: arrow = 'down',
                    [styles.up]: arrow = 'right'
                })}>
                    <ArrowIcon/>
                </span>
            }
        </button>
    )
}
