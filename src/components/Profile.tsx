import { Pencil } from "lucide-react";

const Profile = () => {
  const user = {
    name: "Arunagiri",
    email: "arunagiriarun02@gmail.com",
    phone: "+91 7010336171",
    address: "132, Mettu Street, Guruvammapettai, Tindivanam",
    avatar: "src/assets/arun.jpg",
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6  rounded-2xl shadow-xl bg-blue-200">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <button className="text-sm text-yellow-600 hover:text-yellow-800 flex items-center gap-1">
              <Pencil className="w-4 h-4" />
              Edit
            </button>
          </div>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-sm text-gray-500 mt-1">{user.phone}</p>
          <p className="text-sm text-gray-500 mt-1">{user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
