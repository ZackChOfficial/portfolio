import { formatRelative } from 'date-fns'

export type BlogProps = {
title: string;
date: Date;
brief: string;
totalReactions: number
}

export default function Blog({title, date, brief, totalReactions}:BlogProps): JSX.Element {
return <div className='bg-slate-800 rounded-xl my-4 p-6 hover:bg-slate-700 cursor-pointer'>
        <div className='flex space-between no-wrap pb-4'>
            <h2 className='text-xl text-slate-100 w-full'>{title}</h2>
            <span className='text-slate-400 w-full text-right'>{formatRelative(date, new Date())}  •  {totalReactions} reactions</span>
        </div>
        <p className='text-slate-300 text-justify'>{brief}</p>
    </div>
}