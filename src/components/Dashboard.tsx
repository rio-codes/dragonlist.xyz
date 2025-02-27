import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchDragonData } from '../services/api';
import { fetchUserData } from '../services/api';

interface DragonData {
  id: string;
  name: string | null;
  owner: string;
  start: string;
  hatch: string;
  grow: string;
  death: string;
  views: number;
  unique: number;
  clicks: number;
  gender: string;
  acceptaid: boolean;
  hoursleft: number;
  parent_f: string;
  parent_m: string;
}

interface UserData {
  user_id: string;
  username: string;
}

const Dashboard: React.FC = () => {
  const { user, getAccessTokenSilently, logout } = useAuth0();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [dragons, setDragons] = useState<DragonData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = await getAccessTokenSilently();
        const data = await fetchUserData(token);
        setUserData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to load user data');
      }
    };
    getUserData();
  }
  , [getAccessTokenSilently]);

  useEffect(() => {
    const getDragons = async () => {
      try {
        setLoading(true);
        const token = await getAccessTokenSilently();
        const data = await fetchDragonData(token);
        setDragons(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching dragons:', err);
        setError('Failed to load dragon data');
        
        // If API is not available, mock some data for development
        setDragons([
          {
            "id": "x6QTO",
            "name": "Pursued at the Velocity of Light",
            "owner": "lyricism",
            "start": "2025/02/22",
            "hatch": "2025/02/25",
            "grow": "0",
            "death": "0",
            "views": 6979,
            "unique": 649,
            "clicks": 8,
            "gender": "Female",
            "acceptaid": false,
            "hoursleft": 129,
            "parent_f": "",
            "parent_m": ""
        },
        {
            "id": "OAm1V",
            "name": null,
            "owner": "lyricism",
            "start": "2025/02/24",
            "hatch": "0",
            "grow": "0",
            "death": "0",
            "views": 5739,
            "unique": 529,
            "clicks": 10,
            "gender": "",
            "acceptaid": false,
            "hoursleft": 105,
            "parent_f": "oUTuT",
            "parent_m": "SyKxJ"
        },
        {
            "id": "tsPi4",
            "name": "Of Amplitude Modulation",
            "owner": "lyricism",
            "start": "2025/02/22",
            "hatch": "2025/02/25",
            "grow": "0",
            "death": "0",
            "views": 2416,
            "unique": 164,
            "clicks": 6,
            "gender": "",
            "acceptaid": false,
            "hoursleft": 131,
            "parent_f": "5Mg7z",
            "parent_m": "2qXCE"
        },
        {
            "id": "xE8ft",
            "name": null,
            "owner": "lyricism",
            "start": "2025/02/25",
            "hatch": "0",
            "grow": "0",
            "death": "0",
            "views": 1495,
            "unique": 130,
            "clicks": 6,
            "gender": "",
            "acceptaid": false,
            "hoursleft": 129,
            "parent_f": "",
            "parent_m": ""
        },
        {
            "id": "MWu0M",
            "name": "Sanguinity for the Apprehensive",
            "owner": "lyricism",
            "start": "2025/02/21",
            "hatch": "2025/02/24",
            "grow": "0",
            "death": "0",
            "views": 8319,
            "unique": 774,
            "clicks": 12,
            "gender": "Female",
            "acceptaid": false,
            "hoursleft": 113,
            "parent_f": "Ct8fn",
            "parent_m": "qil8t"
        },
        {
            "id": "SRW4d",
            "name": "Vibrant Color for the Melancholy",
            "owner": "lyricism",
            "start": "2025/02/21",
            "hatch": "2025/02/24",
            "grow": "0",
            "death": "0",
            "views": 8530,
            "unique": 781,
            "clicks": 11,
            "gender": "Female",
            "acceptaid": false,
            "hoursleft": 113,
            "parent_f": "4gvmU",
            "parent_m": "9lb9B"
        },
        {
            "id": "J2mMx",
            "name": null,
            "owner": "lyricism",
            "start": "2025/02/25",
            "hatch": "0",
            "grow": "0",
            "death": "0",
            "views": 2,
            "unique": 2,
            "clicks": 1,
            "gender": "",
            "acceptaid": false,
            "hoursleft": 131,
            "parent_f": "",
            "parent_m": ""
        },
        {
            "id": "MPYRk",
            "name": "Thursday Wednesday Thuwed",
            "owner": "lyricism",
            "start": "2025/02/22",
            "hatch": "2025/02/24",
            "grow": "0",
            "death": "0",
            "views": 7434,
            "unique": 709,
            "clicks": 11,
            "gender": "Female",
            "acceptaid": false,
            "hoursleft": 104,
            "parent_f": "dU4BD",
            "parent_m": "oNqRi"
        },
        {
            "id": "TZ6ue",
            "name": "Resistance is Inevitable Thuwed",
            "owner": "lyricism",
            "start": "2025/02/22",
            "hatch": "2025/02/25",
            "grow": "0",
            "death": "0",
            "views": 7631,
            "unique": 877,
            "clicks": 12,
            "gender": "Female",
            "acceptaid": false,
            "hoursleft": 137,
            "parent_f": "V8zv3",
            "parent_m": "45gb3"
        },
        {
            "id": "jrNVr",
            "name": null,
            "owner": "lyricism",
            "start": "2025/02/25",
            "hatch": "0",
            "grow": "0",
            "death": "0",
            "views": 3,
            "unique": 3,
            "clicks": 2,
            "gender": "",
            "acceptaid": false,
            "hoursleft": 140,
            "parent_f": "60GpS",
            "parent_m": "i0WLJ"
        },
        {
            "id": "HcRXE",
            "name": null,
            "owner": "lyricism",
            "start": "2025/02/24",
            "hatch": "0",
            "grow": "0",
            "death": "0",
            "views": 3531,
            "unique": 348,
            "clicks": 7,
            "gender": "",
            "acceptaid": false,
            "hoursleft": 114,
            "parent_f": "",
            "parent_m": ""
        },
        {
            "id": "K21db",
            "name": "Dizzying Tessellation",
            "owner": "lyricism",
            "start": "2025/01/29",
            "hatch": "2025/02/01",
            "grow": "2025/02/04",
            "death": "0",
            "views": 12807,
            "unique": 1006,
            "clicks": 27,
            "gender": "Female",
            "acceptaid": false,
            "hoursleft": -1,
            "parent_f": "",
            "parent_m": ""
        },
        {
            "id": "mt47W",
            "name": "Festivity's Flight",
            "owner": "lyricism",
            "start": "2024/12/25",
            "hatch": "2024/12/31",
            "grow": "2025/01/03",
            "death": "0",
            "views": 4878,
            "unique": 964,
            "clicks": 11,
            "gender": "Male",
            "acceptaid": false,
            "hoursleft": -1,
            "parent_f": "encBf",
            "parent_m": "QmdYo"
        },
        {
            "id": "pmEY4",
            "name": "Disregard Icarus and Build Wings",
            "owner": "lyricism",
            "start": "2025/02/13",
            "hatch": "2025/02/18",
            "grow": "2025/02/21",
            "death": "0",
            "views": 6949,
            "unique": 677,
            "clicks": 13,
            "gender": "Male",
            "acceptaid": false,
            "hoursleft": -1,
            "parent_f": "LmoQD",
            "parent_m": "si8FW"
        },
        {
            "id": "KnFKF",
            "name": "Her Unearthly Possessions",
            "owner": "lyricism",
            "start": "2025/02/14",
            "hatch": "2025/02/19",
            "grow": "2025/02/22",
            "death": "0",
            "views": 6507,
            "unique": 671,
            "clicks": 13,
            "gender": "Male",
            "acceptaid": false,
            "hoursleft": -1,
            "parent_f": "GnneB",
            "parent_m": "IGIdS"
        },
        {
            "id": "OLwxg",
            "name": "Singular Topology",
            "owner": "lyricism",
            "start": "2025/01/06",
            "hatch": "2025/01/09",
            "grow": "2025/01/12",
            "death": "0",
            "views": 14100,
            "unique": 1403,
            "clicks": 21,
            "gender": "Female",
            "acceptaid": false,
            "hoursleft": -1,
            "parent_f": "",
            "parent_m": ""
        },
        {
            "id": "3AX2R",
            "name": "Sporophyte Diaspora",
            "owner": "lyricism",
            "start": "2025/01/03",
            "hatch": "2025/01/06",
            "grow": "2025/01/09",
            "death": "0",
            "views": 11968,
            "unique": 1214,
            "clicks": 23,
            "gender": "Female",
            "acceptaid": false,
            "hoursleft": -1,
            "parent_f": "",
            "parent_m": ""
        },
        {
            "id": "o6ueP",
            "name": "Hyperreality Check",
            "owner": "lyricism",
            "start": "2025/02/13",
            "hatch": "2025/02/18",
            "grow": "2025/02/21",
            "death": "0",
            "views": 6713,
            "unique": 744,
            "clicks": 17,
            "gender": "Male",
            "acceptaid": false,
            "hoursleft": -1,
            "parent_f": "8iDAd",
            "parent_m": "fcltC"
        }
        ]);
      } finally {
        setLoading(false);
      }
    };
    setLoading(false);
    getDragons();
  }, [getAccessTokenSilently]);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-purple-700">dragonlist.xyz dashboard</h1>
        <div className="flex items-center gap-4">
          {user?.picture && (
            <img 
              src={user.picture} 
              alt="Profile" 
              className="w-10 h-10 rounded-full"
            />
          )}
          <div>
            <p className="font-medium">{user?.name}</p>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
          <button 
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <p className="text-lg">Loading dragon data...</p>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dragons.map(dragon => (
            <div 
              key={dragon.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{dragon.name}</h2>
                <p className="text-gray-600">Code: {dragon.id}</p>
                <p className="text-gray-600">Gender: {dragon.gender}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;