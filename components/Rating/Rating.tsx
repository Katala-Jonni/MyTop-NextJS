import { RatingProps } from './Rating.props';
import { useState, useEffect } from 'react';
import StarIcon from '../../assets/svg/star.svg';
import styles from './Rating.module.css';
import cn from 'classnames';

export const Rating = ({ isEditable = false, rating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    useEffect(() => {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, i: number): JSX.Element => {
            console.log(i)
            return (
                <StarIcon className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                })}/>
            )
        });
        setRatingArray(updateArray);
    }

    return (
        <div {...props}>
            {ratingArray.map((r: JSX.Element, i: number): JSX.Element => {
                return (
                    <span key={i}>{r}</span>
                )
            })}
        </div>
    )
}
