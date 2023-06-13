import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex bg-grn-100 min-h-screen flex-col items-center justify-between p-24">
      <div className='text-brn-300'>
        <h2>Welcome to Harvest Thyme Farm</h2>
        <p>Harvest Thyme is a family owned farm located in the scenic Bekgrade lakes region of Maine. Built in 1860, Harvest Thyme has been a staple of the area for over 150 years. Now the Knudesen-Blackburn family is reinvigorating life on the farm again.</p>
        <p>Harvest Thyme offers a wide variety of fruits and vegetables in season and eggs and other delicious home goods year round. Visit us during the holidays for Christmas Trees, wreaths and a hot cup of cocoa. Our family, goats and mini-horse, Scooby Doo, are looking forward to seeing you!</p>
      </div>
    </main>
  )
}
