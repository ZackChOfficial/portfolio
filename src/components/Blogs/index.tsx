import Blog from '../Blog'
import Link from 'next/link'

// async function getData() {
//     const requestBody = {
//         query: `{
//             user(username: "Vishnu14310") {
//               publication {
//                 posts(page: 0) {
//                   brief,
//                   totalReactions,
//                   dateAdded,
//                   totalReactions,
//                   slug
//                 },
//               }
//             }
//           }`,
//           "variables": {}
//       };
//     const response = await fetch("https://api.hashnode.com/", {
//         method: 'POST',
//         body: JSON.stringify(requestBody)
//     });
//     return response.json()
// }

function EmptyData(): JSX.Element {
  return <h3 className='text-slate-600 text-3xl text-center w-full py-10'>Coming soon...</h3>
}

export default async function Blogs(): Promise<JSX.Element> {
    const data = false
    return <div>
        <h3 className='text-slate-200 text-xl font-bold w-full mt-10' id='blogs'>Recent posts</h3>
        { data ? 
         <>
         <Blog title="💭 Notes on Managing Oneself" brief="For most of us, we've got decades and decades of career left. This gets much less intimidating when you have a sense of how and when to change the work we do. Peter Drecker's Managing Oneself provides provoking questions on precisely this..." 
        date={new Date()} totalReactions={2}/> 
        <Link href="https://zchatouane.hashnode.dev" target="_blank" className="text-slate-200 w-full justify-center text-xl py-4 hover:underline underline-offset-4 flex">Read more posts</Link>
        </>
        : <EmptyData/> }
    </div>
}