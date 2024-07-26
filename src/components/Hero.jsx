import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Butcher<span className='text-blue-400'>NoMore</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>ButcherNoMore® provides audio name pronunciations of E-Sports athletes. Confirming the correct pronunciation of names has always been a challenge, and even well-known names are often mispronounced. You'll find the right answer here. Better yet, you'll actually hear it.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Explore The Names"}></Button>
        </div>
    )
}