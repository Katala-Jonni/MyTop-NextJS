import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Button, Htag, P, Tag } from '../components';
import { Rating } from '../components/Rating/Rating';

export default function Home(): JSX.Element {
    const [counter, setCounter] = useState<number>(0)
    useEffect(() => {
        console.log('counter', counter);
        return () => {
            console.log('clean');
        }
    });

    useEffect(() => {
        console.log('counter2', counter);
        console.log('mounted');
    }, []);
    return (
        <>
            <Htag tag='h1'>Text</Htag>
            <Button
                apperance='primary'
                arrow='right'
                onClick={() => setCounter(x => x + 1)}
            >{counter}</Button>
            <Button apperance='ghost' arrow='down'>Кнопка</Button>
            <P size='s'>Привет</P>
            <Tag size='s' color='red'>Red</Tag>
            <Tag size='s'>Ghost</Tag>
            <Tag size='m' color='green'>Green</Tag>
            <Tag size='m' color='primary'>Primary</Tag>
            <Rating rating={4}/>
        </>
    );
}
