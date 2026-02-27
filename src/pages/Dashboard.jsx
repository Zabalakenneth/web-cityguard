import Navbar from "../components/Navbar"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6 grid grid-cols-12 gap-6">

        {/* LEFT COLUMN */}
        <div className="col-span-12 md:col-span-3 space-y-6">

          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="bg-red-600 text-white p-3 font-semibold">
              ACTIVE EMERGENCIES
            </div>
            <div className="p-4 text-sm text-gray-600">
              Sample emergency list here
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="bg-red-600 text-white p-3 font-semibold">
              ASSIGNED RESPONDERS
            </div>
            <div className="p-4 text-sm text-gray-600">
              Responder list here
            </div>
          </div>

        </div>

        {/* CENTER COLUMN */}
        <div className="col-span-12 md:col-span-6">

          <div className="bg-white shadow-lg rounded-xl h-[600px] flex flex-col overflow-hidden">
            <div className="bg-red-600 text-white p-3 font-semibold">
              LIVE MAP
            </div>

            <div className="flex-1">
              <MapContainer
                center={[14.5995, 120.9842]}
                zoom={13}
                className="w-full h-full"
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[14.5995, 120.9842]}>
                  <Popup>Sample Emergency Location</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-12 md:col-span-3 space-y-6">

          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="bg-red-600 text-white p-3 font-semibold">
              EMERGENCY SUMMARY
            </div>
            <div className="p-4 text-sm text-gray-600">
              Summary stats here
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl h-[160px]"></div>
          <div className="bg-white shadow-lg rounded-xl h-[160px]"></div>

        </div>

      </div>
    </div>
  )
}