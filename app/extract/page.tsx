'use client'

import { useState } from 'react'
import { PlusCircle, Upload, Trash2 } from 'lucide-react'

export default function ExtractPage() {
  const [variables, setVariables] = useState([])
  const [file, setFile] = useState(null)

  const addVariable = () => {
    setVariables([...variables, { name: '', type: 'numerical' }])
  }

  const updateVariable = (index, field, value) => {
    const updatedVariables = [...variables]
    updatedVariables[index][field] = value
    setVariables(updatedVariables)
  }

  const removeVariable = (index) => {
    const updatedVariables = variables.filter((_, i) => i !== index)
    setVariables(updatedVariables)
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Variables:', variables)
    console.log('File:', file)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-8">AI Data Extractor</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Define Target Variables</h2>
              {variables.map((variable, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    placeholder="Variable name"
                    value={variable.name}
                    onChange={(e) => updateVariable(index, 'name', e.target.value)}
                    className="flex-grow mr-2 p-2 border rounded"
                  />
                  <select
                    value={variable.type}
                    onChange={(e) => updateVariable(index, 'type', e.target.value)}
                    className="p-2 border rounded mr-2"
                  >
                    <option value="numerical">Numerical</option>
                    <option value="categorical">Categorical</option>
                    <option value="text">Text</option>
                  </select>
                  <button
                    type="button"
                    onClick={() => removeVariable(index)}
                    className="p-2 text-red-600 hover:text-red-800"
                    aria-label="Remove variable"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addVariable}
                className="mt-2 flex items-center text-blue-600 hover:text-blue-800"
              >
                <PlusCircle className="w-5 h-5 mr-1" />
                Add Variable
              </button>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Upload File</h2>
              <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500">PDF file (MAX. 10MB)</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept=".pdf" />
                </label>
              </div>
              {file && <p className="mt-2 text-sm text-gray-600">Selected file: {file.name}</p>}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Extract Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}