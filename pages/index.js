import Layout from '../components/layout/Layout'
import Image from 'next/image'
import profilePic from '../public/images/me.jpeg'

export default function Home({ git }) {

  return (
    <Layout>
      <div className="mx-auto my-28">
        <div className="bg-slate-100 relative shadow-l w-w-1/6 md:w-1/6  lg:w-w-1/6 xl:w-w-1/6 mx-auto">

          <div className="flex justify-center">
            <Image src={profilePic} alt="Profile Pic" width="128" height="128" layout="fixed" className="rounded-full mx-auto absolute" />
          </div>

          <div className="mt-4">
            <h1 className="font-bold text-center text-3xl text-gray-900">Lmnoppy</h1>
            <p className="text-center text-sm text-gray-500 font-medium">Copy paste development</p>
            <p>
              <span>

              </span>
            </p>
            <div className="flex justify-evenly my-5">
              <a href="https://twitter.com/LmnOppy" className="bg-teal-800 font-bold text-sm text-teal-300 w-full text-center py-3 hover:bg-blue-400 hover:text-white hover:shadow-lg">Twitter</a>
              <a href="https://github.com/Lmnoppy" className="bg-teal-800 font-bold text-sm text-teal-300 w-full text-center py-3 hover:bg-gray-700 hover:text-white hover:shadow-lg">GitHub</a>
            </div>
          </div>
        </div>
      </div>

    </Layout >
  )
}