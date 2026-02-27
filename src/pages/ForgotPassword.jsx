import { Link } from 'react-router-dom'

export default function ForgotPassword(){
  function handle(e){ e.preventDefault(); alert('If this were real, a reset link would be sent.') }
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
        <h1 className="text-3xl font-bold mb-6">CITY GUARD</h1>
        <form className="w-64" onSubmit={handle}>
          <input required type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
          <button className="w-full bg-red-600 text-white py-2 rounded">Reset Password</button>
        </form>
        <div className="mt-4">
          <Link to="/" className="text-sm text-gray-500">Back to login</Link>
        </div>
      </div>

      <div className="flex-1 bg-red-600 flex items-center justify-center p-8">
        <img src="/public-assets/bag.png" alt="Emergency Bag" className="w-2/3 max-w-sm" />
      </div>
    </div>
  )
}
