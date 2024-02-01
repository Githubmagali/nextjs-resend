"use client"

 function HomePage() {
  return (
<div className="h-screen bg-slate-300 flex  items-center justify-center">
  <button className="bg-gray-400 px-3 py-2"
   onClick={async ()=>{
    const res = await fetch('/api/send',{
      method: 'POST',
    })
    const data =await res.json()
    console.log(data)
  }}>
  Send email
  </button>

</div>
  )
}

export default HomePage
