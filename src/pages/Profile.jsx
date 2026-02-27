import Navbar from '../components/Navbar'

export default function Profile(){
  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
      <main className="p-6">
        <div className="bg-white rounded shadow p-6 max-w-xl">
          <h2 className="text-xl font-bold mb-4">Profile</h2>
          <p><strong>Name:</strong> Jane Doe</p>
          <p><strong>Email:</strong> jane@example.com</p>
          <div className="mt-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded">Edit Profile</button>
          </div>
        </div>
      </main>
    </div>
  )
}
