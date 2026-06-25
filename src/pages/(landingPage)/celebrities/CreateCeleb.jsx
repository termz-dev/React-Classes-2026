import { useState } from 'react';
import { useCreateCeleb } from './hooks/useCreateCeleb';

const CreateCeleb = () => {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');

  const { loading, error, success, createCeleb } = useCreateCeleb();

  const handleSubmit = async (e) => {
    e.preventDefault();  // prevent page reload
    
    const celebData = {
      name,
      profession,
      image,
      bio
    };

    const createdCeleb = await createCeleb(celebData);
    
    if (createdCeleb) {
      // Success — clear form
      setName('');
      setProfession('');
      setImage('');
      setBio('');
      // TODO: show success message, then redirect or refetch
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className='text-3xl font-bold text-gray-800 mb-8'>Create Celebrity</h1>

      {error && <p className='text-red-600 mb-4'>{error}</p>}
      {success && <p className='text-green-600 mb-4'>Celebrity created successfully!</p>}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md py-2 px-4"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Profession *</label>
          <input
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md py-2 px-4"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image URL *</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md py-2 px-4"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Bio (optional)</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 rounded-md py-2 px-4"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Celebrity'}
        </button>
      </form>
    </div>
  );
};

export default CreateCeleb;