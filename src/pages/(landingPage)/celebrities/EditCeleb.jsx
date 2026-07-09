import React, { useState } from 'react'
import { useGetSingleCeleb } from './hooks/useGetSingleCeleb';
import { useUpdateCeleb } from './hooks/useUpdateCeleb';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const EditCeleb = () => {
    const {loading, error, singleCeleb} = useGetSingleCeleb();
    const {updateCeleb} = useUpdateCeleb();
    console.log(singleCeleb)
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [image, setImage] = useState('');
    const [bio, setBio] = useState('');
    const { id } = useParams();

     useEffect(() => {
  if (singleCeleb) {
    setName(singleCeleb.name);
    setProfession(singleCeleb.profession);
    setImage(singleCeleb.image);
    setBio(singleCeleb.bio || '');
  }
}, [singleCeleb]);

    
if (loading) {
    return <div><p>Loading...</p></div>
}

if (error) {
    return <div><p>{error}</p></div>
}

if (!singleCeleb) {
    return <div><p>Celeb not found</p></div>
}



const handleSubmit = async (e) => {
      e.preventDefault();

      const celebData = {
        name,
        profession,
        image,
        bio
      }
     const updated = await updateCeleb(celebData, id)

      if (updated) {
            navigate(`/celebs/${id}`);
    }

  }
    

   

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <form onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.3)] p-8 sm:p-10"
        
      >
        <div className="mb-8 text-center">
            {error && <p className="text-sm font-semibold text-red-600 mb-2">{error}</p>}
            <h1 className="text-3xl font-bold text-slate-900">Edit Celebrity</h1>
            <p className="mt-2 text-sm text-slate-500">Add a new celebrity profile with name, profession, image link, and bio.</p>
        </div>

        <div className="grid gap-5">
          <label className="block text-sm font-medium text-slate-700">
            Name
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Profession
            <input
              id="profession"
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Image URL
            <input
              id="image"
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Bio
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-2 h-32 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {loading ? "Updating Celebrity..." : "Update Celebrity"}
          </button>
        </div>
      </form>
    </div>
  )
}
export default EditCeleb
